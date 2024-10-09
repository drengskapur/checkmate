import os
import shutil
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path

from combine import FileCombiner


class TestFileCombiner(unittest.TestCase):
    def setUp(self):
        self.test_dir = Path(tempfile.mkdtemp())
        self.old_cwd = os.getcwd()
        os.chdir(self.test_dir)
        self.output_file = self.test_dir / "combined.txt"
        self.tree_file = self.test_dir / "tree.txt"

    def tearDown(self):
        os.chdir(self.old_cwd)
        shutil.rmtree(self.test_dir)

    def create_file(self, path, content=""):
        file_path = self.test_dir / path
        file_path.parent.mkdir(parents=True, exist_ok=True)
        if isinstance(content, bytes):
            file_path.write_bytes(content)
        else:
            file_path.write_text(content)

    def run_combine(self, additional_args=None):
        '''
        Helper method to run the combine.py script via CLI.
        '''
        script_path = os.path.join(os.path.dirname(__file__), 'combine.py')
        cmd = [
            sys.executable,
            script_path,
            '--project-root', str(self.test_dir),
            '--output', str(self.output_file),
        ]
        if additional_args:
            cmd.extend(additional_args)
        result = subprocess.run(cmd, capture_output=True, text=True)
        self.assertEqual(result.returncode, 0, msg=f"Script failed: {result.stderr}")

    def test_ignore_single_file(self):
        self.create_file("example.txt")
        self.create_file("another.txt")
        self.create_file(".combineignore", "example.txt")
        self.run_combine()
        output = self.output_file.read_text()
        self.assertNotIn("Source: example.txt", output)
        self.assertIn("Source: another.txt", output)

    def test_keep_single_file(self):
        self.create_file("example.txt")
        self.create_file("another.txt")
        self.create_file(".combineignore", "*.txt\n!example.txt")
        self.run_combine()
        output = self.output_file.read_text()
        self.assertIn("Source: example.txt", output)
        self.assertNotIn("Source: another.txt", output)

    def test_multiple_files_same_extension(self):
        self.create_file("file1.txt", "Content for file1")
        self.create_file("file2.txt", "Content for file2")
        self.create_file("file3.log", "This is a log file.")
        self.create_file(".combineignore", "*.txt")
        self.run_combine()
        output = self.output_file.read_text()
        self.assertNotIn("Source: file1.txt", output)
        self.assertNotIn("Source: file2.txt", output)
        self.assertIn("Source: file3.log", output)

    def test_multiple_files_same_name(self):
        self.create_file("example.txt")
        self.create_file("example.log")
        self.create_file("other.txt")
        self.create_file(".combineignore", "example*")
        self.run_combine()
        output = self.output_file.read_text()
        self.assertNotIn("Source: example.txt", output)
        self.assertNotIn("Source: example.log", output)
        self.assertIn("Source: other.txt", output)

    def test_ignore_folder(self):
        self.create_file("examples/file1.txt")
        self.create_file("examples/file2.txt")
        self.create_file("root_file.txt")
        self.create_file(".combineignore", "examples/")
        self.run_combine()
        output = self.output_file.read_text()
        self.assertNotIn("Source: examples/file1.txt", output)
        self.assertNotIn("Source: examples/file2.txt", output)
        self.assertIn("Source: root_file.txt", output)

    def test_files_inside_folders(self):
        self.create_file("examples/example.txt")
        self.create_file("examples/other.txt")
        self.create_file("root_file.txt")
        self.create_file(".combineignore", "examples/example.txt")
        self.run_combine()
        output = self.output_file.read_text()
        self.assertNotIn("Source: examples/example.txt", output)
        self.assertIn("Source: examples/other.txt", output)
        self.assertIn("Source: root_file.txt", output)

    def test_ignore_folder_except_file(self):
        self.create_file("examples/keep.txt")
        self.create_file("examples/ignore.txt")
        self.create_file("root_file.txt")
        self.create_file(".combineignore", "examples/*\n!examples/keep.txt")
        self.run_combine()
        output = self.output_file.read_text()
        self.assertIn("Source: examples/keep.txt", output)
        self.assertNotIn("Source: examples/ignore.txt", output)
        self.assertIn("Source: root_file.txt", output)

    def test_ignore_files_in_every_directory(self):
        self.create_file("dir1/example.txt")
        self.create_file("dir2/example.txt")
        self.create_file("example.txt")
        self.create_file("other.txt")
        self.create_file(".combineignore", "**/example.txt")
        self.run_combine()
        output = self.output_file.read_text()
        self.assertNotIn("Source: dir1/example.txt", output)
        self.assertNotIn("Source: dir2/example.txt", output)
        self.assertNotIn("Source: example.txt", output)
        self.assertIn("Source: other.txt", output)

    def test_ignore_files_only_in_root(self):
        self.create_file("example.txt")
        self.create_file("dir1/example.txt")
        self.create_file("other.txt")
        self.create_file(".combineignore", "/example.txt")
        self.run_combine()
        output = self.output_file.read_text()
        self.assertNotIn("Source: example.txt", output)
        self.assertIn("Source: dir1/example.txt", output)
        self.assertIn("Source: other.txt", output)

    def test_nested_directories(self):
        self.create_file("dir1/dir2/dir3/dir4/nested_file.txt")
        self.create_file(".combineignore", "")
        self.run_combine()
        output = self.output_file.read_text()
        self.assertIn("Source: dir1/dir2/dir3/dir4/nested_file.txt", output)

    def test_empty_directory(self):
        (self.test_dir / "empty_dir").mkdir()
        self.create_file(".combineignore", "")
        self.run_combine(additional_args=['--output-tree'])
        self.assertTrue(self.output_file.exists())
        tree_content = (self.test_dir / "tree.txt").read_text()
        self.assertIn("empty_dir", tree_content)

    def test_hidden_files(self):
        self.create_file(".hidden_file")
        self.create_file("visible_file")
        self.create_file(".combineignore", ".*")
        self.run_combine()
        output = self.output_file.read_text()
        self.assertNotIn("Source: .hidden_file", output)
        self.assertIn("Source: visible_file", output)

    def test_symlink_handling(self):
        self.create_file("original.txt")
        os.symlink(self.test_dir / "original.txt", self.test_dir / "link.txt")
        self.create_file(".combineignore", "")
        self.run_combine()
        output = self.output_file.read_text()
        self.assertIn("Source: original.txt", output)
        self.assertNotIn("Source: link.txt", output)

    def test_special_characters(self):
        self.create_file("file with spaces.txt")
        self.create_file("file_with_$pecial_chars.txt", "Content with $pecial chars\n")
        self.create_file(".combineignore", "")
        self.run_combine()
        output = self.output_file.read_text()
        self.assertIn("Source: file with spaces.txt", output)
        self.assertIn("Source: file_with_$pecial_chars.txt", output)
        self.assertIn("Content with $pecial chars", output)

    def test_matching_many_characters(self):
        self.create_file("Example.txt")
        self.create_file("example.txt")
        self.create_file("other.txt")
        self.create_file(".combineignore", "[Ee]xample.txt")
        self.run_combine()
        output = self.output_file.read_text()
        self.assertNotIn("Source: Example.txt", output)
        self.assertNotIn("Source: example.txt", output)
        self.assertIn("Source: other.txt", output)

    def test_keep_all_asdf_files(self):
        self.create_file("file1.asdf")
        self.create_file("file2.asdf")
        self.create_file("file3.txt")
        self.create_file(".combineignore", "!*.asdf")
        self.run_combine()
        output = self.output_file.read_text()
        self.assertIn("Source: file1.asdf", output)
        self.assertIn("Source: file2.asdf", output)
        self.assertIn("Source: file3.txt", output)

    def test_complex_extension_matching(self):
        self.create_file("file.txt")
        self.create_file("file.txt.bak")
        self.create_file("file.bak.txt")
        self.create_file(".combineignore", "*.bak")
        self.run_combine()
        output = self.output_file.read_text()
        self.assertIn("Source: file.txt", output)
        self.assertNotIn("Source: file.txt.bak", output)
        self.assertIn("Source: file.bak.txt", output)

    def test_exclusion_override(self):
        self.create_file("exclude_me.txt")
        self.create_file("include_me.txt")
        self.create_file(".combineignore", "*.txt\n!include_me.txt")
        self.run_combine()
        output = self.output_file.read_text()
        self.assertNotIn("Source: exclude_me.txt", output)
        self.assertIn("Source: include_me.txt", output)

    def test_is_binary(self):
        self.create_file("text.txt", "This is a text file.\n")
        self.create_file("utf8.txt", "This file contains UTF-8: áéíóú\n")
        self.create_file("binary.bin", b"\x00\x01\x02\x03")
        self.create_file("high_non_printable.txt", b"\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0A")
        self.create_file(
            "mostly_binary.bin", b"\x00\x01\x02\x03This is mostly binary\xff\xfe\xfd"
        )

        self.assertFalse(FileCombiner.is_binary(self.test_dir / "text.txt"))
        self.assertTrue(FileCombiner.is_binary(self.test_dir / "binary.bin"))
        self.assertFalse(FileCombiner.is_binary(self.test_dir / "utf8.txt"))
        self.assertTrue(FileCombiner.is_binary(self.test_dir / "high_non_printable.txt"))
        self.assertTrue(FileCombiner.is_binary(self.test_dir / "mostly_binary.bin"))

    def test_empty_file(self):
        self.create_file("empty.txt")
        self.assertFalse(FileCombiner.is_binary(self.test_dir / "empty.txt"))

    def test_unicode_file(self):
        self.create_file("unicode.txt", "This file contains unicode: áéíóú\n")
        self.assertFalse(FileCombiner.is_binary(self.test_dir / "unicode.txt"))

    def test_large_text_file(self):
        with open(self.test_dir / "large.txt", "w") as f:
            f.write("This is a large text file.\n" * 10000)
        self.assertFalse(FileCombiner.is_binary(self.test_dir / "large.txt"))

    def test_large_binary_file(self):
        with open(self.test_dir / "large.bin", "wb") as f:
            f.write(os.urandom(100000))
        self.assertTrue(FileCombiner.is_binary(self.test_dir / "large.bin"))

    def test_file_size_limit(self):
        self.create_file("large_file.txt", "A" * (11 * 1024 * 1024))  # 11 MB file
        self.create_file("small_file.txt")
        self.create_file(".combineignore", "")
        script_path = os.path.join(os.path.dirname(__file__), 'combine.py')
        cmd = [
            sys.executable,
            script_path,
            '--project-root', str(self.test_dir),
            '--output', str(self.output_file),
            '--size-limit', str(10 * 1024 * 1024)  # 10 MB
        ]
        result = subprocess.run(cmd, capture_output=True, text=True)
        self.assertEqual(result.returncode, 0, msg=f"Script failed: {result.stderr}")
        output = self.output_file.read_text()
        self.assertIn("Source: large_file.txt", output)
        self.assertIn("[File content not included due to size limit", output)
        self.assertIn("Source: small_file.txt", output)

    def test_tree_structure(self):
        self.create_file("dir1/file1.txt")
        self.create_file("dir1/subdir/file2.txt")
        self.create_file("dir2/file3.txt")
        self.create_file("root_file.txt")
        self.create_file(".combineignore", "")
        self.run_combine(additional_args=['--output-tree'])
        self.assertTrue((self.test_dir / 'tree.txt').exists())
        tree_content = (self.test_dir / 'tree.txt').read_text()
        self.assertIn("dir1", tree_content)
        self.assertIn("subdir", tree_content)
        self.assertIn("dir2", tree_content)
        self.assertIn("root_file.txt", tree_content)

    def test_nested_exclude_patterns(self):
        self.create_file("dir1/file1.txt", "Content of file1")
        self.create_file("dir1/subdir/file2.txt", "Content of file2")
        self.create_file("dir2/file3.txt", "Content of file3")
        self.create_file(".combineignore", "dir1/*\n!dir1/subdir/\n!dir1/subdir/*")
        self.run_combine()
        output = self.output_file.read_text()
        self.assertNotIn("Source: dir1/file1.txt", output)
        self.assertIn("Source: dir1/subdir/file2.txt", output)
        self.assertIn("Source: dir2/file3.txt", output)

    def test_case_sensitivity(self):
        self.create_file("UPPERCASE.txt")
        self.create_file("lowercase.txt")
        self.create_file(".combineignore", "UPPERCASE.txt")
        self.run_combine()
        output = self.output_file.read_text()
        if sys.platform == "win32":
            # Windows is case-insensitive
            self.assertNotIn("Source: UPPERCASE.txt", output)
            self.assertNotIn("Source: uppercase.txt", output)
            self.assertIn("Source: lowercase.txt", output)
        else:
            # Unix-like systems are case-sensitive
            self.assertNotIn("Source: UPPERCASE.txt", output)
            self.assertIn("Source: lowercase.txt", output)

    def test_multiple_exclude_patterns(self):
        self.create_file("file1.txt")
        self.create_file("file2.log")
        self.create_file("file3.py")
        self.create_file(".combineignore", "*.txt\n*.log")
        self.run_combine()
        output = self.output_file.read_text()
        self.assertNotIn("Source: file1.txt", output)
        self.assertNotIn("Source: file2.log", output)
        self.assertIn("Source: file3.py", output)

    def test_non_ascii_content(self):
        self.create_file("non_ascii.txt", "こんにちは世界\n")
        self.create_file(".combineignore", "")
        self.run_combine()
        output = self.output_file.read_text(encoding="utf-8")
        self.assertIn("Source: non_ascii.txt", output)
        self.assertIn("こんにちは世界", output)

    def test_exclude_directory_not_traversed(self):
        # Create the .git directory with some files
        self.create_file(".git/config", "[core]\nrepositoryformatversion = 0\n")
        self.create_file(".git/HEAD", "ref: refs/heads/main\n")
        self.create_file("other_directory/file.txt", "This should be included.")
        self.create_file("root_file.txt", "This is a root file.")
        self.create_file(".combineignore", ".git/")

        self.run_combine()
        output = self.output_file.read_text()
        # Ensure files inside .git/ are not included
        self.assertNotIn("Source: .git/config", output)
        self.assertNotIn("Source: .git/HEAD", output)
        # Ensure other files are included
        self.assertIn("Source: other_directory/file.txt", output)
        self.assertIn("Source: root_file.txt", output)

    def test_exclude_multiple_directories(self):
        # Create multiple directories to exclude
        self.create_file("build/file1.txt", "Content in build")
        self.create_file("dist/file2.txt", "Content in dist")
        self.create_file("src/file3.txt", "Content in src")
        self.create_file("root_file.txt", "This is a root file.")
        self.create_file(".combineignore", "build/\ndist/")

        self.run_combine()
        output = self.output_file.read_text()
        self.assertNotIn("Source: build/file1.txt", output)
        self.assertNotIn("Source: dist/file2.txt", output)
        self.assertIn("Source: src/file3.txt", output)
        self.assertIn("Source: root_file.txt", output)

    def test_exclude_nested_directories(self):
        # Create nested directories
        self.create_file("dir1/dir2/dir3/exclude_me/file.txt", "Should be excluded.")
        self.create_file("dir1/dir2/dir3/include_me/file.txt", "Should be included.")
        self.create_file(".combineignore", "dir1/dir2/dir3/exclude_me/")

        self.run_combine()
        output = self.output_file.read_text()
        self.assertNotIn("Source: dir1/dir2/dir3/exclude_me/file.txt", output)
        self.assertIn("Source: dir1/dir2/dir3/include_me/file.txt", output)

    def test_negated_directory_pattern(self):
        # Create directories and files
        self.create_file("logs/error.log", "Error log")
        self.create_file("logs/access.log", "Access log")
        self.create_file("logs/keep.log", "This should be kept")
        self.create_file(".combineignore", "logs/*.log\n!logs/keep.log")

        self.run_combine()
        output = self.output_file.read_text()
        self.assertNotIn("Source: logs/error.log", output)
        self.assertNotIn("Source: logs/access.log", output)
        self.assertIn("Source: logs/keep.log", output)

    def test_pattern_with_trailing_slash(self):
        # Create directories and files
        self.create_file("cache/temp_file.txt", "Cached data")
        self.create_file("cache_dir/temp_file.txt", "This should be included")
        self.create_file("root_file.txt", "Root file")
        self.create_file(".combineignore", "cache/")

        self.run_combine()
        output = self.output_file.read_text()
        self.assertNotIn("Source: cache/temp_file.txt", output)
        self.assertIn("Source: cache_dir/temp_file.txt", output)
        self.assertIn("Source: root_file.txt", output)

    def test_double_star_pattern(self):
        # Create files in multiple levels
        self.create_file("dir/a.txt", "Content A")
        self.create_file("dir/subdir/b.txt", "Content B")
        self.create_file("dir/subdir/deep/c.txt", "Content C")
        self.create_file(".combineignore", "**/subdir/**")

        self.run_combine()
        output = self.output_file.read_text()
        self.assertIn("Source: dir/a.txt", output)
        self.assertNotIn("Source: dir/subdir/b.txt", output)
        self.assertNotIn("Source: dir/subdir/deep/c.txt", output)

    def test_exclude_directory_with_wildcard(self):
        # Create multiple versioned directories
        self.create_file("build-v1.0/file.txt", "Version 1.0")
        self.create_file("build-v2.0/file.txt", "Version 2.0")
        self.create_file("src/file.txt", "Source code")
        self.create_file(".combineignore", "build-*/")

        self.run_combine()
        output = self.output_file.read_text()
        self.assertNotIn("Source: build-v1.0/file.txt", output)
        self.assertNotIn("Source: build-v2.0/file.txt", output)
        self.assertIn("Source: src/file.txt", output)

if __name__ == "__main__":
    unittest.main(verbosity=2)