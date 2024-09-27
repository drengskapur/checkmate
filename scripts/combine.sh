#!/usr/bin/env bash

#===============================================================================
#
# FILE: combine.sh
#
# DESCRIPTION:
#   Combines the contents of all files within a directory into a single
#   output file, excluding specified files and directories. It also
#   generates a tree structure of the directory.
#
#   Features:
#     - Excludes specified files and directories from the combined output.
#     - Generates a tree structure of the directory, excluding specified
#       files and directories.
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
#   - Customize the exclusion lists and configuration variables as needed.
#
# VERSION: 5.4
#
# AUTHOR: Bard
#
#===============================================================================

# Set shell options for strict error checking and better pipeline behavior
set -euo pipefail

#-------------------------------------------------------------------------------
# Configuration Variables
#-------------------------------------------------------------------------------

# Determine script and parent directory paths
readonly SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
readonly PARENT_DIR="$(dirname "$SCRIPT_DIR")"

# Set paths for output and debug files
readonly DEBUG_DIR="$PARENT_DIR/debug"
readonly OUTPUT_FILE="$DEBUG_DIR/combined.txt"
readonly TREE_FILE="$DEBUG_DIR/tree.txt"
readonly DEBUG_FILE="$DEBUG_DIR/debug.log"

#-------------------------------------------------------------------------------
# Exclusion Lists
#-------------------------------------------------------------------------------

# Files to exclude from processing
readonly EXCLUDE_FILES=(
    ".DS_Store"
    "combine.sh"
    "combined.txt"
    "debug.log"
    "LICENSE"
    "Thumbs.db"
    "tree.txt"
    "update.sh"
)

# Folders to exclude from processing
readonly EXCLUDE_FOLDERS=(
    "__pycache__"
    ".devcontainer"
    ".dvc"
    ".git"
    ".gitea"
    ".github"
    ".temp"
    ".venv"
    ".vscode"
    "data"
    "node_modules"
    "notebooks"
    "terraform"
    "venv"
    "debug"
)

# File patterns to exclude from processing
readonly EXCLUDE_PATTERNS=(
    "*.log"
    "*.pyc"
)

#-------------------------------------------------------------------------------
# File Size Exclusion
#-------------------------------------------------------------------------------

# Maximum file size (in KB) to include in the combined output
readonly MAX_FILE_SIZE_KB=10240  # Exclude files larger than 10 MiB

#-------------------------------------------------------------------------------
# Function: debug_log
#   Logs debug messages to the debug file.
#
# Arguments:
#   $1 - The debug message to log.
#-------------------------------------------------------------------------------
debug_log() {
    echo "[DEBUG] $1" >> "$DEBUG_FILE"
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
    local shebang_line

    # Read the first line to check for shebang
    if [[ -f "$file" ]]; then
        read -r shebang_line < "$file"
    else
        shebang_line=""
    fi

    case "$ext" in
        # Shell scripts
        sh|bash|zsh|fish|ksh|csh|tcsh|ash|dash|xonsh) echo "#"; ;;

        # Scripting languages
        py|pyw|pyc|pyo|pyd|pyi|pyx|pxd|pxi) echo "#"; ;;
        rb|rbw|rake|gemspec) echo "#"; ;;
        pl|pm|t|pod) echo "#"; ;;
        php|php3|php4|php5|php7|phps|phtml|phar)
            if [[ "$shebang_line" == *php* ]]; then
                echo "#"; # Shell-style comment if PHP shebang
            else
                echo "//"; # C++ style comment
            fi
            ;;
        lua) echo "--"; ;;
        tcl|tk|itcl|itk) echo "#"; ;;

        # Compiled languages
        c|h|i) echo "//"; ;;
        cpp|cc|cxx|c++|hpp|hxx|h++|hh|ii) echo "//"; ;;
        m|mm) echo "//"; ;;
        cs) echo "//"; ;;
        java|scala|kt|kts) echo "//"; ;;
        go) echo "//"; ;;
        rs|rlib) echo "//"; ;;
        swift) echo "//"; ;;
        d|di) echo "//"; ;;

        # Web development
        js|jsx|mjs|cjs|ts|tsx) echo "//"; ;;
        html|htm|xhtml|shtml) echo "<!--"; ;;
        ejs|hbs|mustache|handlebars) echo "<!--"; ;;
        xml|svg|xsl|xslt|rss|atom) echo "<!--"; ;;
        css|scss|sass|less) echo "/*"; ;;

        # Data formats
        json|jsonc|json5) echo "//"; ;;
        yaml|yml) echo "#"; ;;
        toml) echo "#"; ;;
        ini|cfg|conf) echo ";"; ;;

        # Database
        sql|mysql|pgsql|plsql) echo "--"; ;;

        # Configuration and build
        Dockerfile|dockerfile) echo "#"; ;;
        makefile|Makefile|gnumakefile|GNUmakefile) echo "#"; ;;
        cmake|CMakeLists.txt) echo "#"; ;;
        hcl|tf|tfvars|tfstate) echo "#"; ;;

        # Markup and documentation
        md|markdown|mdown|mkdn) echo "<!--"; ;;
        rst) echo ".."; ;;
        tex|sty|cls|dtx|ins) echo "%"; ;;

        # Other languages
        asm|s|S) echo ";"; ;;
        ps1|psm1|psd1) echo "#"; ;;
        bat|cmd) echo "REM"; ;;
        vb|vbs|bas) echo "'"; ;;
        f|f77|f90|f95|f03|f08) echo "!"; ;;
        hs|lhs) echo "--"; ;;
        erl|hrl) echo "%"; ;;
        ex|exs) echo "#"; ;;
        clj|cljs|cljc|edn) echo ";"; ;;
        coffee) echo "#"; ;;
        r|R|Rmd) echo "#"; ;;
        vim|vimrc) echo "\""; ;;
        ahk) echo ";"; ;;
        au3) echo ";"; ;;

        # Default case (use # for shebang, otherwise //)
        *)
            if [[ "$shebang_line" == "#!/"* ]]; then
                echo "#";
            else
                echo "//";
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
        html|htm|xhtml|shtml|xml|svg|xsl|xslt|rss|atom|ejs|hbs|mustache|handlebars|md|markdown|mdown|mkdn)
            echo " -->";
            ;;
        # CSS and CSS preprocessors
        css|scss|sass|less) echo " */"; ;;
        *) echo ""; ;;
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
    local num_spaces=1 # Space after comment_start

    [[ -n "$comment_end" ]] && num_spaces=$((num_spaces + 1)) # Space before comment_end

    local content_length=$((${#comment_start} + ${#comment_end} + num_spaces))
    local num_dashes=$((total_length - content_length))
    local dashes

    if (( num_dashes > 0 )); then
        dashes=$(printf '%*s' "$num_dashes" '' | tr ' ' '-')
    else
        dashes=""
    fi

    if [[ -n "$comment_end" ]]; then
        echo "${comment_start} ${dashes} ${comment_end}"
    else
        echo "${comment_start} ${dashes}"
    fi
}

#-------------------------------------------------------------------------------
# Main Script Logic
#-------------------------------------------------------------------------------

# Create debug directory if it doesn't exist
mkdir -p "$DEBUG_DIR"
debug_log "Created debug directory: $DEBUG_DIR"

# Change to the parent directory
cd "$PARENT_DIR" || exit 1 # Exit with error if cd fails
debug_log "Changed to directory: $PARENT_DIR"

# Remove any existing output files
rm -f "$OUTPUT_FILE" "$TREE_FILE" "$DEBUG_FILE"

# Build find expressions for excluded directories
declare -a FIND_PRUNE_DIRS
for dir in "${EXCLUDE_FOLDERS[@]}"; do
    FIND_PRUNE_DIRS+=("-path" "./$dir" "-o")
done

# Remove the last "-o" if present
[[ ${#FIND_PRUNE_DIRS[@]} -gt 0 ]] && unset 'FIND_PRUNE_DIRS[${#FIND_PRUNE_DIRS[@]}-1]'

# Build find expressions for excluded files
declare -a FIND_PRUNE_FILES
for file in "${EXCLUDE_FILES[@]}"; do
    FIND_PRUNE_FILES+=("-name" "$file" "-o")
done

# Remove the last "-o" if present
[[ ${#FIND_PRUNE_FILES[@]} -gt 0 ]] && unset 'FIND_PRUNE_FILES[${#FIND_PRUNE_FILES[@]}-1]'

# Build the find command and process files
first_file=true

find . \( \
    "${FIND_PRUNE_DIRS[@]}" -false \) -prune -o \
    \( "${FIND_PRUNE_FILES[@]}" -false \) -prune -o \
    \( -type f \
    $(printf " ! -name '%s'" "${EXCLUDE_PATTERNS[@]}") \
    -size -"$MAX_FILE_SIZE_KB"k \
    \) -print0 |
while IFS= read -r -d '' file; do
    comment_start=$(get_comment_syntax "$file")
    comment_end=$(get_comment_close "$file")

    if ! "$first_file"; then
        # Generate and write separator line
        separator_line=$(generate_separator_line "$comment_start" "$comment_end")
        echo -e "\n\n$separator_line" >> "$OUTPUT_FILE"
    else
        first_file=false
    fi

    {
        printf '%s Source: %s %s\n\n' "$comment_start" "$file" "$comment_end"
        cat "$file"
    } >> "$OUTPUT_FILE"
    debug_log "Added to combined file: $file"
done

echo "File concatenation complete. Output saved to $OUTPUT_FILE"

# Generate tree structure using the tree command
echo "Generating tree structure..."

# Build the exclude pattern for the tree command
TREE_EXCLUDE_PATTERN=$(printf "|%s" "${EXCLUDE_FILES[@]}" "${EXCLUDE_FOLDERS[@]}")
TREE_EXCLUDE_PATTERN=${TREE_EXCLUDE_PATTERN:1} # Remove leading '|'

# Add EXCLUDE_PATTERNS to the tree exclude pattern
for pattern in "${EXCLUDE_PATTERNS[@]}"; do
    TREE_EXCLUDE_PATTERN="$TREE_EXCLUDE_PATTERN|$pattern"
done

# Generate the tree structure and redirect stderr to debug file
tree -a -I "$TREE_EXCLUDE_PATTERN" > "$TREE_FILE" 2>>"$DEBUG_FILE"

# Replace the '.' at the top of the tree output with the full path
sed -i "1s|^\.$|$PWD|" "$TREE_FILE"

debug_log "Tree command used: tree -a -I \"$TREE_EXCLUDE_PATTERN\""

echo "Tree structure saved to $TREE_FILE"

# Display the first few lines of the output file
echo -e "\nFirst few lines of $OUTPUT_FILE:"
head -n 20 "$OUTPUT_FILE"

# Display the contents of the tree file
echo -e "\nTree structure (from $TREE_FILE):"
cat "$TREE_FILE"

# Display debug information
echo -e "\nDebug information (from $DEBUG_FILE):"
cat "$DEBUG_FILE"

echo -e "\nAll output files are located in the debug folder: $DEBUG_DIR"
