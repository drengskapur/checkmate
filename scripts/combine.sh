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
# VERSION: 5.7
#
# AUTHOR: Drenskapur
#
#===============================================================================

#-------------------------------------------------------------------------------
# Exclusion Patterns
#-------------------------------------------------------------------------------

# Use a heredoc to define exclusion patterns
read -r -d '' EXCLUDE_PATTERNS <<'EOF'
__pycache__/
.devcontainer/
.DS_Store
.dvc/
.git/
.gitea/
.github/
.gitignore
.parcel-cache/
.svelte-kit/
.temp/
.venv/
.vscode/
*.log
*.mp3
*.mp4
*.pdf
*.pkl
*.pyc
combine.sh
combined.txt
combined.yaml
data/
debug/
dist/
docs/
Makefile
node_modules/
notebooks/
package-lock.json
scripts/
terraform/
test.sh
Thumbs.db
update.sh
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
    dirname "$script_dir"
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
    sh | bash | zsh | csh | ksh | tcl | tk | py | pl | rb | php | R | r | js | \
        css | scss | less | html | xml | yaml | yml | json | ini | conf | cfg | \
        Dockerfile | dockerfile | Dockerfile.* | Makefile | makefile | ps1 | psd1 | psm1)
        echo "#"
        ;;
    # C-style languages (// comment)
    c | h | cpp | hpp | cc | cxx | java | cs | go | rs | swift | kt | m | mm)
        echo "//"
        ;;
    # HTML and XML (<!-- comment)
    html | htm | xhtml | xml | xslt)
        echo "<!--"
        ;;
    # CSS and SCSS (/* comment)
    css | scss | less)
        echo "/*"
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
#   Populates the find_exclude_args array.
#-------------------------------------------------------------------------------
generate_find_exclude_args() {
    find_exclude_args=()
    local IFS=$'\n'
    local pattern
    for pattern in $EXCLUDE_PATTERNS; do
        # Skip empty lines and comments
        [[ -z "$pattern" || "$pattern" == \#* ]] && continue

        # Handle directory patterns (ending with '/')
        if [[ "$pattern" == */ ]]; then
            pattern="${pattern%/}"
            find_exclude_args+=(-path "./$pattern" -prune -o)
        elif [[ "$pattern" == /* ]]; then
            # Patterns starting with '/' are relative to the project root
            pattern="${pattern#/}"
            find_exclude_args+=(-path "./$pattern" -prune -o)
        else
            # Handle wildcard patterns and specific files
            find_exclude_args+=(-name "$pattern" -prune -o)
        fi
    done
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
    : >"$included_files_list" # Initialize or clear the file

    # Generate exclusion arguments
    generate_find_exclude_args

    # Debug: Print the find command
    debug_log "Find command: find . ${find_exclude_args[*]} -type f -size -${MAX_FILE_SIZE_KB}k -print0"

    # Build the find command and process files
    find . "${find_exclude_args[@]}" -type f -size -"${MAX_FILE_SIZE_KB}"k -print0 |
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

    echo "Tree structure saved to $TREE_FILE"

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
