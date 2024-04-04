name := font-logos
dest := assets
out_json_ext := .out.json
font_exts := .ttf .woff .woff2 $(out_json_ext)
font_assets := $(foreach ext,$(font_exts),$(dest)/$(name)$(ext))
json_file = $(dest)/$(name).json
version = $(shell jq -r .version package.json)

START_CODEPOINT ?= 0xf300
preview_width := 888

export START_CODEPOINT
export FONT_NAME=$(name)
export OUTPUT_DIR=$(dest)
export JSON_FILE=$(json_file)
export COPYRIGHT=Copyright (c) 2014-$(shell date '+%Y'), Lukas W
export VENDORURL=$(shell jq -r .homepage package.json)

all_files=$(font_assets) $(dest)/$(name).css $(dest)/preview.html $(dest)/readme-header.png README.md

.PHONY: all
all: $(all_files)

.PHONY: pack
pack: $(dest)/$(name)-$(version).zip

$(name)-$(version).tgz: $(all_files)
	npm pack

$(dest)/$(name)-$(version).zip: $(name)-$(version).tgz
	$(eval dir := $(shell mktemp -d))
	npm pack
	tar -xf $(name)-$(version).tgz -C $(dir)
	cd $(dir) && \
		mv $(dir)/package $(dir)/$(name)-$(version) && \
		zip -r $(shell pwd)/$(name)-$(version).zip $(name)-$(version)
	rm -r $(dir)

.SECONDEXPANSION:

$(json_file): scripts/generate-json.mjs icons.tsv package.json
	node scripts/generate-json.mjs

$(font_assets)&: scripts/generate-font.py icons.tsv $(shell find vectors) $(json_file)
	if command -v fontforge; then \
		fontforge --script $(shell pwd)/$< ; \
	else \
		python $< ;\
	fi

%: templates/$$*.njk icons.tsv scripts/render-template.mjs $(json_file) $(dest)/$(name)$(out_json_ext)
	node scripts/render-template.mjs $< $@

$(dest)/readme-header.png: $(dest)/readme-header.html $(font_assets) $(dest)/font-logos.css
	wkhtmltoimage --enable-local-file-access --width $(preview_width) --disable-smart-width $< $@
