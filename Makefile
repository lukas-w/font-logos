name := font-logos
dest := assets
font_exts := .ttf .woff .woff2
font_assets := $(foreach ext,$(font_exts),$(dest)/$(name)$(ext))

START_CODEPOINT ?= 0xf300
preview_width := 888

export START_CODEPOINT
export FONT_NAME=$(name)
export OUTPUT_DIR=$(dest)

.PHONY: all
all: $(font_assets) $(dest)/$(name).css $(dest)/preview.html $(dest)/readme-header.png

.SECONDEXPANSION:

$(font_assets)&: icons.tsv $(shell find vectors) scripts/generate-font.py
	python scripts/generate-font.py

$(dest)/%: icons.tsv scripts/render-template.mjs templates/$$*.njk
	node scripts/render-template.mjs $*

$(dest)/%.png: $(dest)/$$*.html $(font_assets) $(dest)/font-logos.css
	wkhtmltoimage --enable-local-file-access --width $(preview_width) --disable-smart-width $< $@
