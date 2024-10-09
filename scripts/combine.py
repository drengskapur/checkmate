#! /usr/bin/env python3
import argparse
import io
import logging
import os
import shutil
import subprocess
import sys
from pathlib import Path

import pathspec


class FileCombiner:
    @staticmethod
    def get_project_root():
        """
        Get the project root directory.
        It first tries to find the git root.
        If not found, it searches upwards for common project files.
        """
        script_dir = Path(__file__).resolve().parent
        max_depth = 10

        try:
            git_root = subprocess.run(
                ["git", "-C", str(script_dir), "rev-parse", "--show-toplevel"],
                capture_output=True,
                text=True,
                check=True,
            )
            return Path(git_root.stdout.strip())
        except subprocess.CalledProcessError:
            pass
        except FileNotFoundError:
            logging.debug("Git not found. Skipping git root detection.")

        current_dir = script_dir
        for _ in range(max_depth):
            if any(
                (current_dir / indicator).exists()
                for indicator in ["package.json", "setup.py", "Makefile", "README.md"]
            ):
                return current_dir
            if current_dir == current_dir.parent:
                break
            current_dir = current_dir.parent

        return script_dir.parent

    @staticmethod
    def update_paths(combined_output_path, output_tree):
        """
        Determines the output paths for the combined file and optional tree file.
        """
        output_file = (
            Path(combined_output_path)
            if combined_output_path
            else Path.cwd() / "combined.txt"
        )
        tree_file = output_file.parent / "tree.txt" if output_tree else None
        return output_file, tree_file

    @staticmethod
    def setup_environment(output_file, tree_file):
        """
        Sets up the environment by ensuring output directories exist and
        removing any existing output files.
        """
        try:
            output_file.parent.mkdir(parents=True, exist_ok=True)
            if tree_file:
                tree_file.parent.mkdir(parents=True, exist_ok=True)
            logging.debug(f"Output directory: {output_file.parent}")
        except OSError as e:
            logging.error(f"Error creating output directories: {e}")
            sys.exit(1)

        # Remove existing output files if they exist
        files_to_remove = [output_file]
        if tree_file:
            files_to_remove.append(tree_file)
        for file in files_to_remove:
            try:
                if file.exists():
                    if file.is_file():
                        file.unlink()
                    else:
                        logging.error(f"Expected a file but found a directory at {file}")
                        sys.exit(1)
            except OSError as e:
                logging.error(f"Error removing file {file}: {e}")
                sys.exit(1)

    @staticmethod
    def load_exclude_patterns(project_root):
        """
        Loads exclude patterns from .combineignore files.
        Follows .gitignore syntax using pathspec library.
        """
        ignore_contents = []
        script_dir = Path(__file__).resolve().parent
        current_dir = Path.cwd()

        logging.debug(f"Script directory: {script_dir}")
        logging.debug(f"Current working directory: {current_dir}")
        logging.debug(f"Project root: {project_root}")

        dirs_to_check = [script_dir, current_dir, project_root, Path.home()]

        parent = current_dir
        while parent != parent.parent:
            dirs_to_check.append(parent)
            if parent == project_root:
                break
            parent = parent.parent

        dirs_to_check = sorted(set(dirs_to_check), key=lambda x: len(str(x)), reverse=True)

        for directory in dirs_to_check:
            combineignore_path = directory / ".combineignore"
            if combineignore_path.exists():
                logging.debug(f"Found .combineignore in: {combineignore_path}")
                try:
                    with combineignore_path.open("r", encoding="utf-8") as f:
                        content = f.read()
                    ignore_contents.append(content)
                except Exception as e:
                    logging.error(f"Error reading {combineignore_path}: {e}")
                    sys.exit(1)

        if not ignore_contents:
            logging.info("No .combineignore files found. All files will be included.")
            return pathspec.PathSpec.from_lines('gitwildmatch', [])

        # We need to reverse the order of ignore_contents to have the correct precedence
        combined_patterns = '\n'.join(reversed(ignore_contents))

        try:
            spec = pathspec.PathSpec.from_lines('gitwildmatch', combined_patterns.splitlines())
            return spec
        except Exception as e:
            logging.error(f"Error parsing exclude patterns: {e}")
            sys.exit(1)

    @staticmethod
    def is_binary(file_path):
        """
        Checks if a file is binary by reading a portion of it.
        """
        try:
            with file_path.open("rb") as f:
                chunk = f.read(8192)
            if b'\0' in chunk:
                return True
            # Check the proportion of non-printable characters
            text_characters = bytearray({7,8,9,10,12,13,27} | set(range(0x20, 0x100)))
            nontext_count = sum(1 for byte in chunk if byte not in text_characters)
            if nontext_count / len(chunk) > 0.30:
                return True
            return False
        except Exception as e:
            logging.debug(f"Error reading file {file_path}: {e}")
            return True

    @staticmethod
    def combine_files(
        project_root,
        output_file,
        spec,
        tree_file=None,
        size_limit=10 * 1024 * 1024,
    ):
        """
        Combines files from the project_root into a single output file,
        respecting the exclude patterns.
        Generates the tree structure and includes it at the top of the output file.
        """
        # Generate the tree structure and get tree_content
        tree_content = FileCombiner.generate_tree_structure(
            project_root, tree_file, spec
        )

        try:
            with output_file.open("w", encoding="utf-8") as combined:
                combined.write(tree_content)
                combined.write("\n\n")

                for root, dirs, files in os.walk(project_root, followlinks=False):
                    root_path = Path(root)
                    relative_root = root_path.relative_to(project_root)
                    # Exclude directories based on patterns
                    dirs[:] = [d for d in dirs if not spec.match_file(str(relative_root / d))]
                    for file_name in files:
                        file_path = root_path / file_name
                        relative_file = file_path.relative_to(project_root)

                        if file_path.is_symlink():
                            continue

                        # Skip output files to avoid including them in the combined file
                        if file_path.resolve() == output_file.resolve() or (tree_file and file_path.resolve() == tree_file.resolve()):
                            continue

                        if not spec.match_file(str(relative_file)) and not FileCombiner.is_binary(file_path):
                            file_size = file_path.stat().st_size
                            if file_size > size_limit:
                                combined.write(f"\n\n{'#' * 80}\n")
                                combined.write(
                                    f"# Source: {relative_file} (File too large, size: {file_size} bytes)\n\n"
                                )
                                combined.write("[File content not included due to size limit]\n")
                            else:
                                FileCombiner.write_combined_file(
                                    combined, relative_file, file_path
                                )
        except Exception as e:
            logging.error(f"Error writing to output file {output_file}: {e}")
            sys.exit(1)

        logging.info(f"Combined file created at {output_file}")

    @staticmethod
    def write_combined_file(combined, relative_file, file_path):
        """
        Writes the content of a single file into the combined output file.
        """
        separator_line = "#" + "-" * 79
        combined.write(f"\n\n{separator_line}\n")
        combined.write(f"# Source: {relative_file}\n\n")
        try:
            with file_path.open("r", encoding="utf-8") as src_file:
                shutil.copyfileobj(src_file, combined)
        except UnicodeDecodeError:
            combined.write(
                f"[Unable to read file: {relative_file} - It may be a binary file or use a different encoding]\n"
            )

    @staticmethod
    def generate_tree_structure(project_root, tree_file, spec):
        """
        Generates a directory tree structure as a string, respecting the exclude patterns.
        If a tree_file is provided, writes the tree to that file.
        """
        paths = []
        for root, dirs, files in os.walk(project_root):
            root_path = Path(root)
            relative_root = root_path.relative_to(project_root)
            # Exclude directories
            dirs[:] = [d for d in dirs if not spec.match_file(str(relative_root / d))]
            paths.extend(relative_root / d for d in dirs)
            # Exclude files
            paths.extend(relative_root / f for f in files if not spec.match_file(str(relative_root / f)))
        paths = sorted(set(paths))

        all_paths = set()
        for path in paths:
            all_paths.update(path.parents)
            all_paths.add(path)
        all_paths.discard(Path("."))

        children = FileCombiner.build_tree_structure(all_paths)

        tree_content = ".\n"
        with io.StringIO() as tree_buffer:
            FileCombiner.print_tree(tree_buffer, children)
            tree_content += tree_buffer.getvalue()

        if tree_file:
            try:
                tree_file.write_text(tree_content, encoding='utf-8')
                logging.info(f"Tree structure written to {tree_file}")
            except Exception as e:
                logging.error(f"Error writing tree file {tree_file}: {e}")
                sys.exit(1)

        return tree_content

    @staticmethod
    def build_tree_structure(paths):
        """
        Builds a nested dictionary representing the directory tree.
        """
        tree = {}
        for path in paths:
            parts = path.parts
            parent = tree
            for part in parts:
                parent = parent.setdefault(part, {})
        return tree

    @staticmethod
    def print_tree(tree, branch, prefix=""):
        """
        Recursively prints the directory tree to a buffer.
        """
        entries = list(branch.keys())
        count = len(entries)

        for i, entry in enumerate(entries):
            connector = "└── " if i == count - 1 else "├── "
            tree.write(f"{prefix}{connector}{entry}\n")
            new_prefix = prefix + ("    " if i == count - 1 else "│   ")
            FileCombiner.print_tree(tree, branch[entry], new_prefix)

    @staticmethod
    def main():
        parser = argparse.ArgumentParser(description="Combine files into a single output file.")
        parser.add_argument(
            "--project-root",
            default=None,
            help="Specify the project root directory (default: auto-detected).",
        )
        parser.add_argument(
            "--output",
            default=None,
            help="Specify the output file path (default: combined.txt in current directory).",
        )
        parser.add_argument(
            "--output-tree",
            action="store_true",
            help="Output the tree structure to a separate tree.txt file.",
        )
        parser.add_argument(
            "--verbose",
            action="store_true",
            help="Enable verbose output (logging level DEBUG).",
        )

        args = parser.parse_args()

        logging_level = logging.DEBUG if args.verbose else logging.INFO
        logging.basicConfig(
            level=logging_level,
            format="[%(levelname)s] %(message)s",
            handlers=[logging.StreamHandler()],
        )

        if args.project_root:
            project_root = Path(args.project_root).resolve()
            if not project_root.is_dir():
                logging.error(f"The specified project root {project_root} is not a directory.")
                sys.exit(1)
        else:
            project_root = FileCombiner.get_project_root()

        output_file, tree_file = FileCombiner.update_paths(args.output, args.output_tree)

        FileCombiner.setup_environment(output_file, tree_file)

        spec = FileCombiner.load_exclude_patterns(project_root)

        FileCombiner.combine_files(
            project_root, output_file, spec, tree_file=tree_file
        )


if __name__ == "__main__":
    FileCombiner.main()
