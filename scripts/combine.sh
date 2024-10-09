#!/usr/bin/env bash

# Enable extended globbing and globstar
shopt -s extglob globstar

#-------------------------------------------------------------------------------
# Exclusion Patterns
#-------------------------------------------------------------------------------

# Use a heredoc to define exclusion patterns
read -r -d '' EXCLUDE_PATTERNS <<'EOF'
__pycache__/
.bundle/
.cache/
.devcontainer/
.DS_Store
.dvc/
.git/
.gitattributes
.gitea/
.github/
.gitignore
.gradle/
.hg/
.hgignore
.idea/
.maven/
.npm/
.parcel-cache/
.pnpm-store/
.svelte-kit/
.svn/
.temp/
.tmp/
.vagrant/
.venv/
.vs/
.vscode/
.yarn/
*.7z
*.apk
*.avi
*.backup
*.bak
*.bmp
*.class
*.com
*.csv
*.db
*.dll
*.doc
*.docx
*.dwg
*.dxf
*.eot
*.exe
*.flv
*.gif
*.gz
*.ico
*.ipa
*.jpeg
*.jpg
*.key
*.log
*.min.css
*.min.js
*.mov
*.mp3
*.mp4
*.o
*.obj
*.ogg
*.old
*.otf
*.pdf
*.pem
*.pkl
*.png
*.ppt
*.pptx
*.pyc
*.rar
*.so
*.sqlite
*.stl
*.swn
*.swo
*.swp
*.tar
*.tgz
*.tiff
*.ttf
*.wav
*.webm
*.wmv
*.woff
*.woff2
*.xls
*.xlsx
*.zip
*~
bin/
bower_components/
build/
CODE_OF_CONDUCT.md
combine.py
combine.sh
combined.txt
combined.yaml
composer.lock
CONTRIBUTING.md
data/
debug/
desktop.ini
dist/
docs/
Gemfile.lock
id_dsa
id_rsa
jspm_packages/
LICENSE
log/
logs/
node_modules/
notebooks/
out/
package-lock.json
packages/
Pipfile.lock
poetry.lock
scripts/
SECURITY.md
target/
temp/
terraform/
test.sh
Thumbs.db
tmp/
update.sh
vendor/
venv/
yarn.lock
EOF

#-------------------------------------------------------------------------------
# Global Configuration Variables
#-------------------------------------------------------------------------------

# Absolute path for combined.txt
# If set, combined.txt will be written here
# If empty, it will be placed in the project root's debug folder
COMBINED_OUTPUT_PATH=""

#-------------------------------------------------------------------------------
# Function: get_project_root
#   Determines the project root directory.
#
# Returns:
#   The path to the project root directory.
#-------------------------------------------------------------------------------
get_project_root() {
    local script_dir
    script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
    local current_dir
    current_dir="$script_dir"
    local max_depth=10

    # Try to find Git root
    if git -C "$script_dir" rev-parse --show-toplevel &>/dev/null; then
        git -C "$script_dir" rev-parse --show-toplevel
        return
    fi

    # If not in a Git repo, traverse up the directory tree
    while [[ $max_depth -gt 0 ]]; do
        # Check for common project root indicators
        if [[ -f "$current_dir/package.json" ]] ||
            [[ -f "$current_dir/setup.py" ]] ||
            [[ -f "$current_dir/Makefile" ]] ||
            [[ -f "$current_dir/README.md" ]]; then
            echo "$current_dir"
            return
        fi

        # Move up one directory
        current_dir="$(dirname "$current_dir")"
        ((max_depth--))

        # Stop if we've reached the filesystem root
        [[ "$current_dir" == "/" ]] && break
    done

    # If no project root found, use the script's parent directory
    dirname "$script_dir"
}

#-------------------------------------------------------------------------------
# Configuration Variables
#-------------------------------------------------------------------------------

# Determine project root
PROJECT_ROOT="$(get_project_root)"

# Initialize paths (updated in setup_environment)
DEBUG_DIR=""
OUTPUT_FILE=""
TREE_FILE=""
DEBUG_FILE=""

#-------------------------------------------------------------------------------
# File Size Exclusion
#-------------------------------------------------------------------------------

# Maximum file size (in bytes) to include in the combined output
readonly MAX_FILE_SIZE_BYTES=$((10 * 1024 * 1024)) # 10 MiB

#-------------------------------------------------------------------------------
# Function: update_paths
#   Updates paths based on the current PROJECT_ROOT and COMBINED_OUTPUT_PATH.
#-------------------------------------------------------------------------------
update_paths() {
    DEBUG_DIR="$PROJECT_ROOT/debug"
    TREE_FILE="$DEBUG_DIR/tree.txt"
    DEBUG_FILE="$DEBUG_DIR/debug.log"
    if [ -n "$COMBINED_OUTPUT_PATH" ]; then
        OUTPUT_FILE="$COMBINED_OUTPUT_PATH"
    else
        OUTPUT_FILE="$DEBUG_DIR/combined.txt"
    fi
}

#-------------------------------------------------------------------------------
# Function: debug_log
#   Logs debug messages to the debug file.
#
# Arguments:
#   $1 - The debug message to log.
#-------------------------------------------------------------------------------
debug_log() {
    echo "[DEBUG] $(date '+%Y-%m-%d %H:%M:%S') - $1" >>"$DEBUG_FILE"
}

#-------------------------------------------------------------------------------
# Function: get_comment_syntax
#   Determines the appropriate comment syntax for a given file based on its
#   extension and/or shebang line.
#
# Arguments:
#   $1 - The file path.
#
# Returns:
#   The comment start string for the file type.
#-------------------------------------------------------------------------------
get_comment_syntax() {
    local file="$1"
    local ext="${file##*.}"
    local shebang_line=""

    if [[ -f "$file" ]]; then
        shebang_line=$(head -n 1 "$file")
    fi

    case "$ext" in
        # HTML and XML (<!-- comment)
        html | htm | xhtml | xml | xslt)
            echo "<!--"
            ;;
        # CSS and SCSS (/* comment)
        css | scss | less)
            echo "/*"
            ;;
        # Shell and scripting languages (# comment)
        sh | bash | zsh | csh | ksh | tcl | tk | py | pl | rb | php | R | r | js | \
            yaml | yml | json | ini | conf | cfg | \
            Dockerfile | dockerfile | Dockerfile.* | Makefile | makefile | ps1 | psd1 | psm1)
            echo "#"
            ;;
        # C-style languages (// comment)
        c | h | cpp | hpp | cc | cxx | java | cs | go | rs | swift | kt | m | mm)
            echo "//"
            ;;
        # SQL (-- comment)
        sql)
            echo "--"
            ;;
        # Default to hash (#) for unknown extensions with shebang
        *)
            if [[ "$shebang_line" == "#!"* ]]; then
                echo "#"
            else
                echo "#"
            fi
            ;;
    esac
}

#-------------------------------------------------------------------------------
# Function: get_comment_close
#   Determines the appropriate comment closing syntax for a given file based
#   on its extension.
#
# Arguments:
#   $1 - The file path.
#
# Returns:
#   The comment end string for the file type.
#-------------------------------------------------------------------------------
get_comment_close() {
    local ext="${1##*.}"
    case "$ext" in
    html | htm | xhtml | xml | xslt)
        echo "-->"
        ;;
    css | scss | less)
        echo "*/"
        ;;
    *)
        echo ""
        ;;
    esac
}

#-------------------------------------------------------------------------------
# Function: generate_separator_line
#   Generates a separator line with appropriate comment syntax.
#
# Arguments:
#   $1 - The comment start string.
#   $2 - The comment end string (optional).
#
# Returns:
#   The generated separator line string.
#-------------------------------------------------------------------------------
generate_separator_line() {
    local comment_start="$1"
    local comment_end="$2"
    local total_length=80
    local content_length=$((${#comment_start} + ${#comment_end} + 1))
    local num_dashes=$((total_length - content_length))
    local dashes

    if ((num_dashes > 0)); then
        dashes=$(printf '%*s' "$num_dashes" '' | tr ' ' '-')
    else
        dashes=""
    fi

    if [[ -n "$comment_end" ]]; then
        printf "%s %s %s\n" "$comment_start" "$dashes" "$comment_end"
    else
        printf "%s %s\n" "$comment_start" "$dashes"
    fi
}

#-------------------------------------------------------------------------------
# Function: setup_environment
#   Sets up the environment for the script execution.
#-------------------------------------------------------------------------------
setup_environment() {
    # Update paths based on current PROJECT_ROOT and COMBINED_OUTPUT_PATH
    update_paths

    # Create directory for OUTPUT_FILE if needed
    mkdir -p "$(dirname "$OUTPUT_FILE")"

    # Create debug directory if it doesn't exist
    mkdir -p "$DEBUG_DIR"
    debug_log "Created debug directory: $DEBUG_DIR"

    # Change to the project root directory
    cd "$PROJECT_ROOT" || exit 1 # Exit with error if cd fails
    debug_log "Changed to directory: $PROJECT_ROOT"

    # Remove any existing output files
    rm -f "$OUTPUT_FILE" "$TREE_FILE" "$DEBUG_FILE"
}

#-------------------------------------------------------------------------------
# Function: load_patterns
#   Loads exclusion and inclusion patterns into arrays.
#-------------------------------------------------------------------------------
load_patterns() {
    PATTERN_LIST=()
    local IFS=$'\n'
    local pattern
    for pattern in $EXCLUDE_PATTERNS; do
        # Skip empty lines and comments
        [[ -z "$pattern" || "$pattern" == \#* ]] && continue
        pattern=$(echo "$pattern" | sed 's/^[ ]*//;s/[ ]*$//') # Trim leading/trailing spaces
        PATTERN_LIST+=("$pattern")
    done
}

#-------------------------------------------------------------------------------
# Function: should_include_file
#   Determines whether a file should be included based on patterns.
#
# Arguments:
#   $1 - The file path.
#
# Returns:
#   0 if the file should be included, 1 otherwise.
#-------------------------------------------------------------------------------
should_include_file() {
    local file="$1"
    local matched="include" # By default, include the file
    local pattern
    for pattern in "${PATTERN_LIST[@]}"; do
        if [[ "$pattern" == '!'* ]]; then
            # Inclusion pattern
            pattern="${pattern#'!'}"
            if pattern_match "$file" "$pattern"; then
                matched="include"
            fi
        else
            # Exclusion pattern
            if pattern_match "$file" "$pattern"; then
                matched="exclude"
            fi
        fi
    done
    if [[ "$matched" == "include" ]]; then
        return 0
    else
        return 1
    fi
}

#-------------------------------------------------------------------------------
# Function: pattern_match
#   Checks if the file matches the pattern.
#
# Arguments:
#   $1 - The file path.
#   $2 - The pattern.
#
# Returns:
#   0 if the file matches the pattern, 1 otherwise.
#-------------------------------------------------------------------------------
pattern_match() {
    local file="$1"
    local pattern="$2"

    # Normalize file by removing leading './'
    file="${file#./}"

    # If pattern ends with '/', match directories
    if [[ "$pattern" == */ ]]; then
        # Remove trailing '/' from pattern
        pattern="${pattern%/}"
        # Check if file starts with pattern
        if [[ "$file" == "$pattern"* ]]; then
            return 0
        else
            return 1
        fi
    fi

    # Handle patterns starting with '/' (root-level files)
    if [[ "$pattern" == /* ]]; then
        pattern="${pattern#\/}"  # Remove leading '/'
        if [[ "$file" == "$pattern" ]]; then
            return 0
        else
            return 1
        fi
    fi

    # Use extended globbing for other matching
    if [[ "$file" == $pattern ]]; then
        return 0
    else
        return 1
    fi
}

#-------------------------------------------------------------------------------
# Function: is_binary
#   Determines if a file is binary using an ensemble approach.
#
# Arguments:
#   $1 - The file path.
#
# Returns:
#   0 if the file is likely binary, 1 if it's likely text.
#-------------------------------------------------------------------------------
is_binary() {
    local file="$1"
    local score=0
    local threshold=2  # Adjust this threshold as needed

    # Check if the file is empty
    if [ ! -s "$file" ]; then
        return 1  # Empty file is considered text
    fi

    # Check for null bytes (high weight)
    if LC_ALL=C grep -qP '\x00' "$file"; then
        score=$((score + 3))
    fi

    # Check if the file command doesn't mention "text" (medium weight)
    if ! file "$file" | grep -q "text"; then
        score=$((score + 2))
    fi

    # Count printable characters (low weight)
    local printable_count=$(LC_ALL=C tr -cd '[:print:][:space:]' < "$file" | wc -c)
    local total_bytes=$(wc -c < "$file")
    local non_printable_count=$((total_bytes - printable_count))

    # Calculating percentage (low weight)
    if [ "$total_bytes" -gt 0 ]; then
        non_printable_percentage=$((non_printable_count * 100 / total_bytes))
    fi

    if [ "$non_printable_percentage" -gt 30 ]; then
        score=$((score + 1))
    fi

    # Check if the score exceeds the threshold
    if [ "$score" -ge "$threshold" ]; then
        return 0  # File is likely binary
    else
        return 1  # File is likely text
    fi
}

#-------------------------------------------------------------------------------
# Function: combine_files
#   Combines the contents of all text files within the project directory into a
#   single output file, excluding specified files and directories.
#   Records included files to generate a tree structure later.
#-------------------------------------------------------------------------------
combine_files() {
    local first_file=true
    local included_files_list="$DEBUG_DIR/included_files.txt"
    : >"$included_files_list"

    # Load patterns into array
    load_patterns

    # Use find to gather all files under size limit
    find . -type f -size -"${MAX_FILE_SIZE_BYTES}"c -print0 |
        while IFS= read -r -d '' file; do
            # Remove leading './' from file path
            local relative_file="${file#./}"

            if should_include_file "$relative_file" && ! is_binary "$file"; then
                # Save the file to the list of included files
                echo "$file" >>"$included_files_list"

                comment_start=$(get_comment_syntax "$file")
                comment_end=$(get_comment_close "$file")

                # Generate separator line
                separator_line=$(generate_separator_line "$comment_start" "$comment_end")

                if ! $first_file; then
                    # Add extra newline before separator for subsequent files
                    echo -e "\n\n$separator_line" >>"$OUTPUT_FILE"
                else
                    # Just the separator for the first file
                    echo -e "$separator_line" >>"$OUTPUT_FILE"
                    first_file=false
                fi

                {
                    printf '%s Source: %s %s\n\n' "$comment_start" "$file" "$comment_end"
                    cat "$file"
                } >>"$OUTPUT_FILE"
                debug_log "Added to combined file: $file"
            else
                if is_binary "$file"; then
                    debug_log "Excluded binary file: $file"
                else
                    debug_log "Excluded file: $file"
                fi
            fi
        done

    # Create an empty file if no files were processed
    if [[ ! -f "$OUTPUT_FILE" ]]; then
        touch "$OUTPUT_FILE"
    fi

    if [[ -f "$OUTPUT_FILE" ]]; then
        echo "File concatenation complete. Output saved to $OUTPUT_FILE"
    else
        echo "No files were included. Output file was not generated."
    fi
}

#-------------------------------------------------------------------------------
# Function: generate_tree_structure
#   Generates a tree structure of the included files using pure Bash.
#-------------------------------------------------------------------------------
generate_tree_structure() {
    echo "Generating tree structure using Bash..."

    local included_files_list="$DEBUG_DIR/included_files.txt"
    local tree_output="$TREE_FILE"

    if [[ ! -f "$included_files_list" ]]; then
        echo "No included files list found. Cannot generate tree."
        return
    fi

    # Extract unique paths from the included files and sort them
    sed 's#^\./##' "$included_files_list" | sort >"$DEBUG_DIR/tree_paths.txt"

    # Build a tree structure as associative arrays
    declare -A children

    while IFS= read -r path; do
        # Remove leading './' and make paths relative
        path="${path#./}"

        # Split the path into components
        IFS='/' read -ra parts <<< "$path"

        # Initialize parent
        local parent="."

        # For each component except the last (the file), build directories
        for ((i=0; i<${#parts[@]}-1; i++)); do
            dir="${parts[i]}"
            full_path="$parent/$dir"
            # Remove leading './' and extra slashes
            full_path="${full_path#./}"
            full_path="${full_path#/}"

            # Add dir to the children of parent
            if [[ -z "${children["$parent"]}" ]]; then
                children["$parent"]="$dir"
            else
                # Check if dir is already in children[parent]
                if ! grep -qx "$dir" <<< "${children["$parent"]}"; then
                    children["$parent"]+=$'\n'"$dir"
                fi
            fi
            parent="$full_path"
        done

        # Now add the file to the children of the last parent
        file="${parts[-1]}"
        if [[ -z "${children["$parent"]}" ]]; then
            children["$parent"]="$file"
        else
            # Check if file is already in children[parent]
            if ! grep -qx "$file" <<< "${children["$parent"]}"; then
                children["$parent"]+=$'\n'"$file"
            fi
        fi

    done <"$DEBUG_DIR/tree_paths.txt"

    # Add empty directories
    while read -r empty_dir; do
        parent=$(dirname "$empty_dir")
        dir=$(basename "$empty_dir")
        if [[ "$parent" == "." && "$dir" == "." ]]; then
            continue  # Skip the current directory '.'
        fi
        if [[ -z "${children["$parent"]}" ]]; then
            children["$parent"]="$dir"
        else
            if ! grep -qx "$dir" <<< "${children["$parent"]}"; then
                children["$parent"]+=$'\n'"$dir"
            fi
        fi
    done < <(find . -type d -empty | sed 's#^\./##')

    # Function to recursively print the tree
    print_tree() {
        local prefix="$1"
        local dir="$2"
        local entries

        # Get the list of children, split into an array
        IFS=$'\n' read -d '' -r -a entries < <(printf '%s\0' "${children["$dir"]}")

        local i
        local count=${#entries[@]}

        for ((i = 0; i < count; i++)); do
            local entry="${entries[i]}"
            local path
            if [[ "$dir" == "." ]]; then
                path="$entry"
            else
                path="$dir/$entry"
            fi
            local connector
            local new_prefix

            if ((i == count - 1)); then
                connector="└── "
                new_prefix="$prefix    "
            else
                connector="├── "
                new_prefix="$prefix│   "
            fi

            echo "${prefix}${connector}${entry}" >>"$tree_output"

            # If this entry has children, recurse
            if [[ -n "${children["$path"]}" ]]; then
                print_tree "$new_prefix" "$path"
            fi
        done
    }

    # Start printing from the root directory '.'
    echo "." >"$tree_output"
    print_tree "" "."

    # Add a blank line at the end of the tree
    echo "" >>"$tree_output"

    # Safely prepend the tree structure to the combined file

    # Create a temporary copy of OUTPUT_FILE to prevent reading and writing to the same file
    temp_output_data="$(mktemp "$DEBUG_DIR/temp_output_data.XXXXXX")"
    cp "$OUTPUT_FILE" "$temp_output_data"

    # Concatenate the tree and temporary output data into a new temporary file
    temp_output="$(mktemp "$DEBUG_DIR/temp_combined_output.XXXXXX")"
    cat "$TREE_FILE" "$temp_output_data" >"$temp_output"

    # Overwrite the OUTPUT_FILE after closing all reads to avoid conflict
    mv "$temp_output" "$OUTPUT_FILE"

    # Clean up temporary files
    rm -f "$temp_output_data"
    rm -f "$DEBUG_DIR/tree_paths.txt"
    rm -f "$included_files_list"
    debug_log "Added tree structure to the top of the combined file: $TREE_FILE"
    debug_log "Cleaned up temporary files."
}

#-------------------------------------------------------------------------------
# Function: display_results
#   Displays the results of the script execution.
#-------------------------------------------------------------------------------
display_results() {
    # Display debug information
    if [[ -f "$DEBUG_FILE" ]]; then
        echo "Debug Log:"
        cat "$DEBUG_FILE"
    else
        echo "No debug log available."
    fi

    echo ""
    echo ""
    echo ""

    # Display the contents of the tree file
    if [[ -f "$TREE_FILE" ]]; then
        echo "Directory Tree:"
        cat "$TREE_FILE"
    else
        echo "No tree structure available."
    fi

    echo -e "\nAll output files are located in the debug folder: $DEBUG_DIR"
}

#-------------------------------------------------------------------------------
# Test Framework
#-------------------------------------------------------------------------------

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Test counters
TESTS_RUN=0
TESTS_PASSED=0
TESTS_FAILED=0

# Test setup function
setup_test() {
    TEST_DIR=$(mktemp -d)
    cd "$TEST_DIR" || exit 1
    mkdir -p debug
    DEBUG_DIR="$TEST_DIR/debug"
    OUTPUT_FILE="$DEBUG_DIR/combined.txt"
    TREE_FILE="$DEBUG_DIR/tree.txt"
    DEBUG_FILE="$DEBUG_DIR/debug.log"
}

# Test teardown function
teardown_test() {
    cd "$OLDPWD" || exit 1
    rm -rf "$TEST_DIR"
}

# Updated test runner function
run_test() {
    local test_name="$1"
    local test_function="$2"

    echo -n "Running test: $test_name ... "
    setup_test

    if ( $test_function ); then
        echo -e "${GREEN}PASSED${NC}"
        ((TESTS_PASSED++))
    else
        echo -e "${RED}FAILED${NC}"
        ((TESTS_FAILED++))
    fi

    teardown_test
    ((TESTS_RUN++))
}

# Updated assert function
assert() {
    if ! eval "$1"; then
        echo -e "${RED}Assertion failed:${NC} $1"
        exit 1
    fi
}

# File creation helpers
create_file() { echo "Content of $1" > "$1"; }
create_file_with_content() { echo -ne "$2" > "$1"; }

#-------------------------------------------------------------------------------
# Test Cases
#-------------------------------------------------------------------------------

# File and Directory Handling Tests
test_ignore_single_file() {
    create_file "example.txt"
    create_file "another.txt"
    EXCLUDE_PATTERNS="example.txt"
    combine_files > /dev/null
    local output=$(cat "$OUTPUT_FILE")
    assert "! echo \"$output\" | grep -q 'Source: ./example.txt'"
    assert "echo \"$output\" | grep -q 'Source: ./another.txt'"
}

test_keep_single_file() {
    create_file "example.txt"
    create_file "another.txt"
    EXCLUDE_PATTERNS="*.txt
!example.txt"
    combine_files > /dev/null
    local output=$(cat "$OUTPUT_FILE")
    assert "echo \"$output\" | grep -q 'Source: ./example.txt'"
    assert "! echo \"$output\" | grep -q 'Source: ./another.txt'"
}

test_multiple_files_same_extension() {
    create_file "file1.txt"
    create_file "file2.txt"
    create_file "file3.log"
    EXCLUDE_PATTERNS="*.txt"
    combine_files > /dev/null
    local output=$(cat "$OUTPUT_FILE")
    assert "! echo \"$output\" | grep -q 'Source: ./file1.txt'"
    assert "! echo \"$output\" | grep -q 'Source: ./file2.txt'"
    assert "echo \"$output\" | grep -q 'Source: ./file3.log'"
}

test_multiple_files_same_name() {
    create_file "example.txt"
    create_file "example.log"
    create_file "other.txt"
    EXCLUDE_PATTERNS="example*"
    combine_files > /dev/null
    local output=$(cat "$OUTPUT_FILE")
    assert "! echo \"$output\" | grep -q 'Source: ./example.txt'"
    assert "! echo \"$output\" | grep -q 'Source: ./example.log'"
    assert "echo \"$output\" | grep -q 'Source: ./other.txt'"
}

test_ignore_folder() {
    mkdir -p examples
    create_file "examples/file1.txt"
    create_file "examples/file2.txt"
    create_file "root_file.txt"
    EXCLUDE_PATTERNS="examples/"
    combine_files > /dev/null
    local output=$(cat "$OUTPUT_FILE")
    assert "! echo \"$output\" | grep -q 'Source: ./examples/file1.txt'"
    assert "! echo \"$output\" | grep -q 'Source: ./examples/file2.txt'"
    assert "echo \"$output\" | grep -q 'Source: ./root_file.txt'"
}

test_files_inside_folders() {
    mkdir -p examples
    create_file "examples/example.txt"
    create_file "examples/other.txt"
    create_file "root_file.txt"
    EXCLUDE_PATTERNS="examples/example.txt"
    combine_files > /dev/null
    local output=$(cat "$OUTPUT_FILE")
    assert "! echo \"$output\" | grep -q 'Source: ./examples/example.txt'"
    assert "echo \"$output\" | grep -q 'Source: ./examples/other.txt'"
    assert "echo \"$output\" | grep -q 'Source: ./root_file.txt'"
}

test_ignore_folder_except_file() {
    mkdir -p examples
    create_file "examples/keep.txt"
    create_file "examples/ignore.txt"
    create_file "root_file.txt"
    EXCLUDE_PATTERNS="examples/*
!examples/keep.txt"
    combine_files > /dev/null
    local output=$(cat "$OUTPUT_FILE")
    assert "echo \"$output\" | grep -q 'Source: ./examples/keep.txt'"
    assert "! echo \"$output\" | grep -q 'Source: ./examples/ignore.txt'"
    assert "echo \"$output\" | grep -q 'Source: ./root_file.txt'"
}

test_ignore_files_in_every_directory() {
    mkdir -p dir1 dir2
    create_file "dir1/example.txt"
    create_file "dir2/example.txt"
    create_file "example.txt"
    create_file "other.txt"
    EXCLUDE_PATTERNS="**/example.txt"
    combine_files > /dev/null
    local output=$(cat "$OUTPUT_FILE")
    assert "! echo \"$output\" | grep -q 'Source: ./dir1/example.txt'"
    assert "! echo \"$output\" | grep -q 'Source: ./dir2/example.txt'"
    assert "! echo \"$output\" | grep -q 'Source: ./example.txt'"
    assert "echo \"$output\" | grep -q 'Source: ./other.txt'"
}

test_ignore_files_only_in_root() {
    mkdir -p dir1
    create_file "example.txt"
    create_file "dir1/example.txt"
    create_file "other.txt"
    EXCLUDE_PATTERNS="/example.txt"
    combine_files > /dev/null
    local output=$(cat "$OUTPUT_FILE")
    assert "! echo \"$output\" | grep -q 'Source: ./example.txt'"
    assert "echo \"$output\" | grep -q 'Source: ./dir1/example.txt'"
    assert "echo \"$output\" | grep -q 'Source: ./other.txt'"
}

test_nested_directories() {
    mkdir -p dir1/dir2/dir3/dir4
    create_file "dir1/dir2/dir3/dir4/nested_file.txt"
    combine_files > /dev/null
    local output=$(cat "$OUTPUT_FILE")
    assert "echo \"$output\" | grep -q 'Source: ./dir1/dir2/dir3/dir4/nested_file.txt'"
}

test_empty_directory() {
    mkdir empty_dir
    combine_files > /dev/null
    generate_tree_structure > /dev/null
    assert "[ -f \"$OUTPUT_FILE\" ]"
    local tree_content=$(cat "$TREE_FILE")
    assert "echo \"$tree_content\" | grep -q 'empty_dir'"
}

test_hidden_files() {
    create_file ".hidden_file"
    create_file "visible_file"
    EXCLUDE_PATTERNS=".*"
    combine_files > /dev/null
    local output=$(cat "$OUTPUT_FILE")
    assert "! echo \"$output\" | grep -q 'Source: ./.hidden_file'"
    assert "echo \"$output\" | grep -q 'Source: ./visible_file'"
}

test_symlink_handling() {
    create_file "original.txt"
    ln -s original.txt link.txt
    combine_files > /dev/null
    local output=$(cat "$OUTPUT_FILE")
    assert "echo \"$output\" | grep -q 'Source: ./original.txt'"
    assert "! echo \"$output\" | grep -q 'Source: ./link.txt'"
}

test_special_characters() {
    create_file "file with spaces.txt"
    printf "Content with \$pecial chars\n" > "file_with_\$pecial_chars.txt"
    combine_files > /dev/null
    assert "grep -Fq 'Source: ./file with spaces.txt' \"$OUTPUT_FILE\""
    assert "grep -Fq 'Source: ./file_with_\$pecial_chars.txt' \"$OUTPUT_FILE\""
    assert "grep -Fq 'Content with \$pecial chars' \"$OUTPUT_FILE\""
}

# Pattern Matching Tests
test_matching_many_characters() {
    create_file "Example.txt"
    create_file "example.txt"
    create_file "other.txt"
    EXCLUDE_PATTERNS="[Ee]xample.txt"
    combine_files > /dev/null
    local output=$(cat "$OUTPUT_FILE")
    assert "! echo \"$output\" | grep -q 'Source: ./Example.txt'"
    assert "! echo \"$output\" | grep -q 'Source: ./example.txt'"
    assert "echo \"$output\" | grep -q 'Source: ./other.txt'"
}

test_keep_all_asdf_files() {
    create_file "file1.asdf"
    create_file "file2.asdf"
    create_file "file3.txt"
    EXCLUDE_PATTERNS="!*.asdf"
    combine_files > /dev/null
    local output=$(cat "$OUTPUT_FILE")
    assert "echo \"$output\" | grep -q 'Source: ./file1.asdf'"
    assert "echo \"$output\" | grep -q 'Source: ./file2.asdf'"
    assert "echo \"$output\" | grep -q 'Source: ./file3.txt'"
}

test_complex_extension_matching() {
    create_file "file.txt"
    create_file "file.txt.bak"
    create_file "file.bak.txt"
    EXCLUDE_PATTERNS="*.bak"
    combine_files > /dev/null
    local output=$(cat "$OUTPUT_FILE")
    assert "echo \"$output\" | grep -q 'Source: ./file.txt'"
    assert "! echo \"$output\" | grep -q 'Source: ./file.txt.bak'"
    assert "echo \"$output\" | grep -q 'Source: ./file.bak.txt'"
}

test_exclusion_override() {
    create_file "exclude_me.txt"
    create_file "include_me.txt"
    EXCLUDE_PATTERNS="*.txt
!include_me.txt"
    combine_files > /dev/null
    local output=$(cat "$OUTPUT_FILE")
    assert "! echo \"$output\" | grep -q 'Source: ./exclude_me.txt'"
    assert "echo \"$output\" | grep -q 'Source: ./include_me.txt'"
}

# Binary File Tests
test_is_binary() {
    create_file_with_content "text.txt" "This is a text file.\n"
    create_file_with_content "utf8.txt" "This file contains UTF-8: áéíóú\n"
    printf '\x00\x01\x02\x03' > binary.bin
    printf '\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0A' > high_non_printable.txt
    printf '\x00\x01\x02\x03This is mostly binary\xff\xfe\xfd' > mostly_binary.bin

    assert "! is_binary text.txt"
    assert "is_binary binary.bin"
    assert "! is_binary utf8.txt"
    assert "is_binary high_non_printable.txt"
    assert "is_binary mostly_binary.bin"
}

test_empty_file() {
    touch "empty.txt"
    assert "! is_binary 'empty.txt'"
}

test_unicode_file() {
    create_file_with_content "unicode.txt" "This file contains unicode: áéíóú\n"
    assert "! is_binary 'unicode.txt'"
}

test_large_text_file() {
    yes "This is a large text file.\n" | head -c 100000 > large.txt
    assert "! is_binary 'large.txt'"
}

test_large_binary_file() {
    dd if=/dev/urandom of=large.bin bs=100K count=1 2>/dev/null
    assert "is_binary 'large.bin'"
}

# File Size Tests
test_file_size_limit() {
    dd if=/dev/zero of=large_file.txt bs=1M count=11 2>/dev/null
    create_file "small_file.txt"
    combine_files > /dev/null
    local output=$(cat "$OUTPUT_FILE")
    assert "! echo \"$output\" | grep -q 'Source: ./large_file.txt'"
    assert "echo \"$output\" | grep -q 'Source: ./small_file.txt'"
}

# Comment Syntax Tests
test_comment_syntax() {
    assert '[ "$(get_comment_syntax "test.sh")" = "#" ]'
    assert '[ "$(get_comment_syntax "test.py")" = "#" ]'
    assert '[ "$(get_comment_syntax "test.c")" = "//" ]'
    assert '[ "$(get_comment_syntax "test.html")" = "<!--" ]'
    assert '[ "$(get_comment_syntax "test.css")" = "/*" ]'
    assert '[ "$(get_comment_syntax "test.sql")" = "--" ]'
}

test_comment_close() {
    assert '[ "$(get_comment_close "test.html")" = "-->" ]'
    assert '[ "$(get_comment_close "test.css")" = "*/" ]'
    assert '[ "$(get_comment_close "test.sh")" = "" ]'
}

test_separator_line() {
    local separator
    separator=$(generate_separator_line "#" "")
    assert "[ ${#separator} -eq 80 ]"
    assert "[[ \"$separator\" == \"#\"* ]]"
}

# Tree Structure Tests
test_tree_structure() {
    mkdir -p dir1/subdir dir2
    create_file "dir1/file1.txt"
    create_file "dir1/subdir/file2.txt"
    create_file "dir2/file3.txt"
    create_file "root_file.txt"
    combine_files > /dev/null 2>&1
    generate_tree_structure > /dev/null 2>&1
    assert '[ -f "$TREE_FILE" ]'
    local tree_content
    tree_content=$(cat "$TREE_FILE")
    assert "echo \"$tree_content\" | grep -q 'dir1'"
    assert "echo \"$tree_content\" | grep -q 'subdir'"
    assert "echo \"$tree_content\" | grep -q 'dir2'"
    assert "echo \"$tree_content\" | grep -q 'root_file.txt'"
}

#-------------------------------------------------------------------------------
# Test Runner
#-------------------------------------------------------------------------------

run_tests() {
    echo -e "${YELLOW}Running tests...${NC}"

    # File and Directory Handling Tests
    run_test "Ignore Single File" test_ignore_single_file
    run_test "Keep Single File" test_keep_single_file
    run_test "Multiple Files Same Extension" test_multiple_files_same_extension
    run_test "Multiple Files Same Name" test_multiple_files_same_name
    run_test "Ignore Folder" test_ignore_folder
    run_test "Files Inside Folders" test_files_inside_folders
    run_test "Ignore Folder Except File" test_ignore_folder_except_file
    run_test "Ignore Files in Every Directory" test_ignore_files_in_every_directory
    run_test "Ignore Files Only in Root" test_ignore_files_only_in_root
    run_test "Nested Directories" test_nested_directories
    run_test "Empty Directory" test_empty_directory
    run_test "Hidden Files" test_hidden_files
    run_test "Symlink Handling" test_symlink_handling
    run_test "Special Characters in Filenames" test_special_characters

    # Pattern Matching Tests
    run_test "Matching Many Characters" test_matching_many_characters
    run_test "Keep All ASDF Files" test_keep_all_asdf_files
    run_test "Complex Extension Matching" test_complex_extension_matching
    run_test "Exclusion Override" test_exclusion_override

    # Binary File Tests
    run_test "Binary File Detection" test_is_binary
    run_test "Empty File" test_empty_file
    run_test "Unicode File" test_unicode_file
    run_test "Large Text File" test_large_text_file
    run_test "Large Binary File" test_large_binary_file

    # File Size Tests
    run_test "File Size Limit" test_file_size_limit

    # Comment Syntax Tests
    run_test "Comment Syntax" test_comment_syntax
    run_test "Comment Close" test_comment_close
    run_test "Separator Line" test_separator_line

    # Tree Structure Tests
    run_test "Tree Structure Generation" test_tree_structure

    echo -e "\n${YELLOW}Test Summary:${NC}"
    echo "Total tests run: $TESTS_RUN"
    echo -e "${GREEN}Tests passed: $TESTS_PASSED${NC}"
    echo -e "${RED}Tests failed: $TESTS_FAILED${NC}"

    if [ "$TESTS_FAILED" -eq 0 ]; then
        echo -e "\n${GREEN}All tests passed!${NC}"
    else
        echo -e "\n${RED}Some tests failed.${NC}"
        return 1
    fi
}

#-------------------------------------------------------------------------------
# Main function
#-------------------------------------------------------------------------------
main() {
    if [[ "$1" == "--test" ]]; then
        run_tests
    else
        setup_environment
        combine_files
        generate_tree_structure
        display_results
    fi
}

# Execute the main function
main "$@"
