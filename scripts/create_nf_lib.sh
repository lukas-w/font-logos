#!/usr/bin/env bash

# Convert the icons.tsv file's data to Nerd Font lib's format
# to update their lib file with the new glyphs.
# Usage: ./create_lib.sh
# 	Copy missing glyphs from the output to the
# 	<PATH>/nerd-fonts/bin/scripts/lib/i_logos.sh file.

# Get script directory to set file path relative to it
file_path="$(
	cd -- "$(dirname "${0}")" >/dev/null 2>&1 || exit
	pwd -P
)/../icons.tsv"

# Read the tsv file excluding the header
sed '1d' "${file_path}" | while IFS=$'\t' read -r offset _ classname; do
	# Calculate the codepoint, font-logos starts at 0xF300
	codepoint=$((62208 + offset))
	# Get the glyph from the codepoint
	glyph=$(printf "\\U%x" "${codepoint}" 2>/dev/null)
	# Print line using the Nerd Fonts lib's format
	printf "i='%b' i_linux_%s=\$i\n" "${glyph}" "${classname}"
done
