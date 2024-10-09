#!/usr/bin/env python3
"""
FileCombiner - Combine project files into a single output file.

This script recursively walks through a project directory, reads all text files,
and combines them into a single output file. It respects exclude patterns
defined in `.combineignore` files, similar to how `.gitignore` works.

Features:
- Auto-detects the project root directory.
- Supports custom exclude/include patterns in `.combineignore`.
- Handles binary files and large files gracefully.
- Generates a tree structure of the project if desired.

Usage:
    python combine.py [--project-root <path>] [--output <file>]
                      [--output-tree] [--verbose] [--size-limit <bytes>]

Author: Your Name
License: MIT
"""

import argparse
import logging
import os
import sys
import subprocess
from pathlib import Path
import fnmatch
import io


class FileCombiner:
    @staticmethod
    def get_project_root() -> Path:
        """
        Get the project root directory.

        Attempts to find the Git root. If not found, defaults to current directory.

        Returns:
            Path: The project root directory.
        """
        script_dir = Path(__file__).resolve().parent

        # Attempt to find the Git root directory
        try:
            git_root = (
                subprocess.run(
                    ["git", "rev-parse", "--show-toplevel"],
                    capture_output=True,
                    text=True,
                    check=True,
                )
                .stdout.strip()
            )
            return Path(git_root)
        except Exception:
            return script_dir

    @staticmethod
    def load_patterns(project_root: Path) -> list:
        """
        Load patterns from .combineignore files.

        Returns:
            list: List of patterns, each pattern is a tuple (pattern_str, is_negated)
        """
        patterns = []
        combineignore_path = project_root / ".combineignore"
        if combineignore_path.exists():
            with combineignore_path.open("r", encoding="utf-8") as f:
                for line in f:
                    line = line.strip()
                    if not line or line.startswith("#"):
                        continue
                    is_negated = False
                    if line.startswith("!"):
                        is_negated = True
                        line = line[1:]
                    patterns.append((line, is_negated))
        return patterns

    @staticmethod
    def matches_path(path: Path, patterns: list) -> bool:
        """
        Determine if the path should be excluded based on patterns.
        Returns True if the path is excluded, False otherwise.
        """
        # Convert path to posix and ensure it starts without leading '/'
        path_str = path.as_posix().lstrip("/")

        def match_pattern(path, pattern):
            if pattern.endswith('/'):
                return path.startswith(pattern) or path + '/' == pattern
            elif pattern.startswith('**/'):
                return fnmatch.fnmatch(path, pattern[3:]) or fnmatch.fnmatch(path, f"*/{pattern[3:]}")
            elif '**' in pattern:
                parts = pattern.split('**')
                return path.startswith(parts[0]) and path.endswith(parts[-1])
            else:
                return fnmatch.fnmatch(path, pattern)

        include = True  # By default, include the file

        for pattern, is_negated in patterns:
            # Normalize pattern by stripping leading '/' if present
            pattern = pattern.lstrip("/")

            if match_pattern(path_str, pattern):
                include = is_negated

        return not include  # Return True if path is excluded

    @staticmethod
    def combine_files(
        project_root: Path,
        output_file: Path,
        patterns: list,
        output_tree: bool = False,
        size_limit: int = 10 * 1024 * 1024,
    ) -> None:
        """
        Combine files from the project directory into a single output file.
        """
        # Generate the tree structure
        tree_content = FileCombiner.generate_tree_structure(
            project_root, patterns, output_tree
        )

        try:
            with output_file.open("w", encoding="utf-8") as combined:
                # Write the tree content
                combined.write(tree_content)
                combined.write("\n\n")

                for root, dirs, files in os.walk(project_root):
                    root_path = Path(root)
                    relative_root = root_path.relative_to(project_root)

                    # Do not exclude directories to ensure we can include files from excluded directories
                    for file_name in files:
                        file_path = root_path / file_name
                        relative_file = file_path.relative_to(project_root)

                        if file_path.is_symlink():
                            continue

                        # Skip output file to prevent self-inclusion
                        if file_path.resolve() == output_file.resolve():
                            continue

                        # Check if the file should be excluded
                        if FileCombiner.matches_path(relative_file, patterns):
                            continue

                        # Write the file content to combined output
                        FileCombiner.write_combined_file(
                            combined, relative_file, file_path, size_limit
                        )
            logging.info(f"Combined file created at {output_file}")
        except Exception as e:
            logging.error(f"Error writing to output file {output_file}: {e}")
            sys.exit(1)

    @staticmethod
    def generate_tree_structure(
        project_root: Path, patterns: list, output_tree: bool
    ) -> str:
        """
        Generate a textual representation of the project directory tree.

        Returns:
            str: The tree structure as a string.
        """
        paths = []
        for root, dirs, files in os.walk(project_root):
            root_path = Path(root)
            relative_root = root_path.relative_to(project_root)

            # Collect directories
            for d in dirs:
                dir_path = relative_root / d
                if not FileCombiner.matches_path(dir_path, patterns):
                    paths.append(dir_path)

            # Collect files
            for f in files:
                file_path = relative_root / f
                if not FileCombiner.matches_path(file_path, patterns):
                    paths.append(file_path)

        paths = sorted(set(paths))

        # Build the directory tree structure
        all_paths = set()
        for path in paths:
            all_paths.update(path.parents)
            all_paths.add(path)
        all_paths.discard(Path("."))

        children = FileCombiner.build_tree_structure(all_paths)

        tree_content = "Project Structure:\n.\n"
        with io.StringIO() as tree_buffer:
            FileCombiner.print_tree(tree_buffer, children)
            tree_content += tree_buffer.getvalue()
            tree_str = tree_buffer.getvalue()

        # Optionally output to tree.txt
        if output_tree:
            tree_file = project_root / "tree.txt"
            try:
                tree_file.write_text("Project Structure:\n.\n" + tree_str, encoding="utf-8")
                logging.info(f"Tree structure written to {tree_file}")
            except Exception as e:
                logging.error(f"Error writing tree file {tree_file}: {e}")
                sys.exit(1)

        return tree_content

    @staticmethod
    def build_tree_structure(paths: set) -> dict:
        """
        Build a nested dictionary representing the directory tree.

        Args:
            paths (set): A set of Paths representing files and directories.

        Returns:
            dict: A nested dictionary representing the directory tree.
        """
        tree = {}
        for path in sorted(paths):
            parts = path.parts
            parent = tree
            for part in parts:
                parent = parent.setdefault(part, {})
        return tree

    @staticmethod
    def print_tree(tree_buffer: io.StringIO, branch: dict, prefix: str = "") -> None:
        """
        Recursively print the directory tree to a buffer.

        Args:
            tree_buffer (io.StringIO): The buffer to write the tree structure.
            branch (dict): The current branch of the tree.
            prefix (str): The prefix for the current branch.
        """
        entries = list(branch.keys())
        count = len(entries)

        for i, entry in enumerate(entries):
            connector = "└── " if i == count - 1 else "├── "
            tree_buffer.write(f"{prefix}{connector}{entry}\n")
            new_prefix = prefix + ("    " if i == count - 1 else "│   ")
            FileCombiner.print_tree(tree_buffer, branch[entry], new_prefix)

    @staticmethod
    def write_combined_file(
        combined, relative_file: Path, file_path: Path, size_limit: int
    ) -> None:
        """
        Write the content of a single file into the combined output file.

        Args:
            combined (TextIO): The combined output file object.
            relative_file (Path): The relative path of the source file.
            file_path (Path): The full path to the source file.
        """
        separator_line = "#" + "-" * 79
        combined.write(f"\n\n{separator_line}\n")
        combined.write(f"# Source: {relative_file}\n\n")
        try:
            file_size = file_path.stat().st_size
            if file_size > size_limit:
                combined.write(
                    f"[File content not included due to size limit ({file_size} bytes)]\n"
                )
                return
            if FileCombiner.is_binary(file_path):
                combined.write("[Binary file content not included]\n")
                return
            with file_path.open("r", encoding="utf-8") as src_file:
                combined.write(src_file.read())
        except Exception as e:
            combined.write(f"[Error reading file {relative_file}: {e}]\n")

    @staticmethod
    def is_binary(file_path: Path) -> bool:
        """
        Check if a file is binary by reading a portion of it.

        Args:
            file_path (Path): The file path to check.

        Returns:
            bool: True if the file is binary, False otherwise.
        """
        try:
            with file_path.open("rb") as f:
                chunk = f.read(8192)
            if b"\0" in chunk:
                return True
            text_characters = bytearray({7, 8, 9, 10, 12, 13, 27} | set(range(0x20, 0x100)))
            nontext = chunk.translate(None, text_characters)
            return bool(nontext)
        except Exception:
            return True

    @staticmethod
    def main() -> None:
        """
        Entry point for the script.
        """
        parser = argparse.ArgumentParser(
            description="Combine files into a single output file."
        )
        parser.add_argument(
            "--project-root",
            default=None,
            help="Specify the project root directory (default: current directory).",
        )
        parser.add_argument(
            "--output",
            default="combined.txt",
            help="Specify the output file path (default: combined.txt).",
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
        parser.add_argument(
            "--size-limit",
            type=int,
            default=10 * 1024 * 1024,
            help="Size limit for included files in bytes (default: 10MB).",
        )

        args = parser.parse_args()

        logging_level = logging.DEBUG if args.verbose else logging.INFO
        logging.basicConfig(
            level=logging_level,
            format="[%(levelname)s] %(message)s",
            handlers=[logging.StreamHandler()],
        )

        # Resolve the project root directory
        if args.project_root:
            project_root = Path(args.project_root).resolve()
        else:
            project_root = Path.cwd()

        if not project_root.is_dir():
            logging.error(f"The project root {project_root} is not a directory.")
            sys.exit(1)

        output_file = Path(args.output).resolve()
        if output_file.exists():
            output_file.unlink()

        # Load patterns
        patterns = FileCombiner.load_patterns(project_root)

        # Combine files
        FileCombiner.combine_files(
            project_root,
            output_file,
            patterns,
            output_tree=args.output_tree,
            size_limit=args.size_limit,
        )


if __name__ == "__main__":
    FileCombiner.main()