#!/usr/bin/env bash

#===============================================================================
#
# FILE: combine.sh
#
# DESCRIPTION:
#   Combines the contents of all files within a directory into a single
#   output file, excluding specified files and directories using custom
#   exclusion patterns. It also generates a tree structure of the directory.
#
#   Features:
#     - Excludes specified files and directories from the combined output
#       using customizable patterns.
#     - Generates a tree structure of the directory, showing only included files.
#     - Adds separator lines between files in the combined output for
#       better readability.
#     - Handles various file types with appropriate comment syntax for
#       separator lines.
#     - Stores all outputs in a dedicated 'debug' folder.
#     - Provides detailed debug logging for troubleshooting.
#
# USAGE: ./combine.sh
#
# NOTES:
#   - This script should be run from the 'scripts' directory.
#   - Customize the exclusion patterns in the HERE document as needed.
#
# VERSION: 5.6
#
# AUTHOR: Drenskapur
#
#===============================================================================

#-------------------------------------------------------------------------------
# Exclusion Patterns
#-------------------------------------------------------------------------------

# Use a heredoc to define exclusion patterns
read -r -d '' EXCLUDE_PATTERNS <<'EOF'
# Exclude files
.DS_Store
.gitignore
*.log
*.md
*.mp3
*.mp4
*.pdf
*.pkl
*.pyc
Thumbs.db

# Exclude specific files
build_features.log
cleaning.log
CODE_OF_CONDUCT.md
combine.sh
combined.txt
combined.yaml
CONTRIBUTING.md
dvc.lock
evaluate.log
evaluation.log
ingestion.log
Makefile
package-lock.json
preprocessing.log
SECURITY.md
splitting.log
test.sh
train.log
update_repository.sh
update.sh
visualize.log

# Exclude directories
__pycache__/
.devcontainer/
.dvc/
.git/
.gitea/
.parcel-cache/
.svelte-kit/
.temp/
.venv/
.vscode/
data/
debug/
dist/
docs/
huggingface/
node_modules/
notebooks/
scripts/
terraform/
venv/
EOF

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
    echo "$(dirname "$script_dir")"
}

#-------------------------------------------------------------------------------
# Configuration Variables
#-------------------------------------------------------------------------------

# Determine project root
PROJECT_ROOT="$(get_project_root)"
readonly PROJECT_ROOT

# Set paths for output and debug files
readonly DEBUG_DIR="$PROJECT_ROOT/debug"
readonly OUTPUT_FILE="$DEBUG_DIR/combined.txt"
readonly TREE_FILE="$DEBUG_DIR/tree.txt"
readonly DEBUG_FILE="$DEBUG_DIR/debug.log"

#-------------------------------------------------------------------------------
# File Size Exclusion
#-------------------------------------------------------------------------------

# Maximum file size (in KB) to include in the combined output
readonly MAX_FILE_SIZE_KB=10240 # Exclude files larger than 10 MiB

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
    # Shell and scripting languages (# comment)
    ash | bash | cmake | coffee | csh | dash | Dockerfile | dockerfile | hcl | ksh | makefile | Makefile | pl | pm | pod | \
        ps1 | psd1 | psm1 | py | pyd | pyi | pyo | pyc | pxd | pxi | pyw | pyx | r | R | rake | rb | rbw | \
        Rmd | sh | t | tcl | tf | tfstate | tfvars | tk | toml | xonsh | yaml | yml | zsh)
        echo "#"
        ;;

    # C-style languages (// comment)
    c | c++ | cc | cpp | cs | cxx | d | di | go | h | h++ | hh | hpp | hxx | i | ii | java | js | json | \
        json5 | jsonc | jsx | kt | kts | m | mjs | mm | rs | rlib | scala | swift | ts | tsx)
        echo "//"
        ;;

    # Web development (<!-- comment)
    ejs | handlebars | hbs | htm | html | markdown | md | mdown | mkdn | mustache | rss | \
        shtml | svg | xhtml | xml | xsl | xslt)
        echo "<!--"
        ;;

    # CSS and preprocessors (/* comment)
    css | less | sass | scss)
        echo "/*"
        ;;

    # Database languages (-- comment)
    hs | lhs | lua | mysql | pgsql | plsql | sql)
        echo "--"
        ;;

    # Other specific syntaxes
    ahk | asm | au3 | S | s) echo ";" ;;
    bat | cmd) echo "REM" ;;
    clj | cljc | cljs | edn) echo ";" ;;
    cfg | conf | ini) echo ";" ;;
    erl | hrl) echo "%" ;;
    ex | exs) echo "#" ;;
    f | f03 | f08 | f77 | f90 | f95) echo "!" ;;
    rst) echo ".." ;;
    cls | dtx | ins | sty | tex) echo "%" ;;
    bas | vb | vbs) echo "'" ;;
    vim | vimrc) echo "\"" ;;

    # Special case for PHP
    php | php3 | php4 | php5 | php7 | phar | phtml | phps)
        if [[ "$shebang_line" == *php* ]]; then
            echo "#"
        else
            echo "//"
        fi
        ;;

    # Default case
    *)
        if [[ "$shebang_line" == "#!"* ]]; then
            echo "#"
        else
            echo "//"
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
    # HTML, XML, and Markdown-related languages
    ejs | handlebars | hbs | htm | html | markdown | md | mdown | mkdn | mustache | rss | shtml | svg | xhtml | xml | xsl | xslt)
        echo "-->"
        ;;
    # CSS and CSS preprocessors
    css | less | sass | scss)
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
    local content_length=$((${#comment_start} + ${#comment_end} + 2))
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
# Function: generate_find_exclude_args
#   Converts exclusion patterns to find command exclusion arguments.
#
# Arguments:
#   None (uses the EXCLUDE_PATTERNS variable)
#
# Returns:
#   Prints the find command arguments required to exclude the patterns.
#-------------------------------------------------------------------------------
generate_find_exclude_args() {
    local -a find_args=()
    local IFS=$'\n'
    local pattern
    for pattern in $EXCLUDE_PATTERNS; do
        # Skip empty lines and comments
        [[ -z "$pattern" || "$pattern" == \#* ]] && continue

        # Handle directory patterns (ending with '/')
        if [[ "$pattern" == */ ]]; then
            pattern="${pattern%/}"
            find_args+=(-path "./$pattern" -o)
        elif [[ "$pattern" == /* ]]; then
            # Patterns starting with '/' are relative to the project root
            pattern="${pattern#/}"
            find_args+=(-path "./$pattern" -o)
        else
            # Handle wildcard patterns
            find_args+=(-name "$pattern" -o)
        fi
    done

    # Remove the last '-o' operator
    if [ "${#find_args[@]}" -gt 0 ]; then
        unset 'find_args[${#find_args[@]}-1]'
    fi

    # If there are patterns, wrap them in parentheses
    if [ "${#find_args[@]}" -gt 0 ]; then
        echo "(" "${find_args[@]}" ")" -prune -o
    else
        echo ""
    fi
}

#-------------------------------------------------------------------------------
# Function: combine_files
#   Combines the contents of all files within the project directory into a
#   single output file, excluding specified files and directories.
#   Records included files to generate a tree structure later.
#-------------------------------------------------------------------------------
combine_files() {
    local first_file=true
    local included_files_list="$DEBUG_DIR/included_files.txt"
    >"$included_files_list" # Initialize or clear the file

    # Convert exclusion patterns to find exclude arguments
    local FIND_EXCLUDE_ARGS
    # Use an array to handle special characters correctly
    IFS=' ' read -r -a FIND_EXCLUDE_ARGS <<<"$(generate_find_exclude_args)"

    # Build the find command and process files
    find . "${FIND_EXCLUDE_ARGS[@]}" -type f -size -"${MAX_FILE_SIZE_KB}"k -print0 |
        while IFS= read -r -d '' file; do
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
        done

    echo "File concatenation complete. Output saved to $OUTPUT_FILE"
}

#-------------------------------------------------------------------------------
# Function: generate_tree_structure
#   Generates a tree structure of the included files.
#-------------------------------------------------------------------------------
generate_tree_structure() {
    echo "Generating tree structure..."

    local included_files_list="$DEBUG_DIR/included_files.txt"
    local tree_output="$TREE_FILE"

    if [[ ! -f "$included_files_list" ]]; then
        echo "No included files list found. Cannot generate tree."
        return
    fi

    # Extract unique directory paths from the included files
    awk -F'/' '
    {
        for (i=2; i<=NF; i++) {
            dir=""
            for (j=2; j<=i; j++) {
                dir = dir"/"$j
            }
            print dir
        }
    }' "$included_files_list" | sort -u >"$DEBUG_DIR/tree_paths.txt"

    # Generate the tree-like structure
    python3 - "$DEBUG_DIR/tree_paths.txt" "$PROJECT_ROOT" <<'EOF' >"$TREE_FILE"
import sys
import os

def build_tree(paths):
    tree = {}
    for path in paths:
        parts = path.strip("/").split("/")
        current_level = tree
        for part in parts:
            if part not in current_level:
                current_level[part] = {}
            current_level = current_level[part]
    return tree

def print_tree(tree, prefix=""):
    keys = sorted(tree.keys())
    for idx, key in enumerate(keys):
        connector = "└── " if idx == len(keys) -1 else "├── "
        print(prefix + connector + key)
        next_prefix = prefix + ("    " if idx == len(keys) -1 else "│   ")
        print_tree(tree[key], next_prefix)

if __name__ == "__main__":
    with open(sys.argv[1], "r") as f:
        paths = [line.strip() for line in f if line.strip()]
    tree = build_tree(paths)
    print(sys.argv[2])
    print_tree(tree)
EOF

    echo "Tree structure saved to $TREE_FILE"

    # Prepend the tree structure to the combined file
    cat "$TREE_FILE" "$OUTPUT_FILE" >combined_temp && mv combined_temp "$OUTPUT_FILE"
    debug_log "Added tree structure to the top of the combined file: $TREE_FILE"

    # Clean up temporary files
    rm -f "$DEBUG_DIR/tree_paths.txt"
    rm -f "$included_files_list"
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
# Main function
#-------------------------------------------------------------------------------
main() {
    setup_environment
    combine_files
    generate_tree_structure
    display_results
}

# Execute the main function
main
