#! /usr/bin/env bash
set -e

if [ ! -e ".fontcustom-manifest.json" ]; then
	# Dummy run, just create manifest from fontcustom.yml
	fontcustom compile >/dev/null 2>&1 || \
		fontcustom compile # run again in case of error to show messages
fi

# Patch in our glyph <-> codepoint table
jq --slurpfile my glyphs.json '.glyphs=$my[0]' .fontcustom-manifest.json > .fontcustom-manifest.json~
mv .fontcustom-manifest.json~ .fontcustom-manifest.json

# Do the actual work
fontcustom compile -F

# Save used codepoint allocation (which can differ if glyphs were added/removed without updating glyphs.json)
jq '.glyphs' .fontcustom-manifest.json > glyphs.json

wkhtmltoimage --enable-local-file-access --crop-w 888 ./assets/icon_preview.html ./assets/preview.png
