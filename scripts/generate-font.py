import os
import tempfile
import json
import fontforge

autowidth = False
font_em = 512
font_design_size = 16
jsonfile = os.environ['JSON_FILE']
fontname = os.environ['FONT_NAME']
outputdir = os.environ['OUTPUT_DIR']
vectorsdir = 'vectors'
start_codepoint = int(os.environ['START_CODEPOINT'], base=0)
design_px = font_em // font_design_size
outjsonfile = os.path.join(outputdir, fontname+'.out.json')
font = fontforge.font()
# font.encoding = 'UnicodeFull'
font.fontname = fontname
font.familyname = fontname
font.fullname = fontname
font.design_size = font_design_size
font.em = font_em
font.copyright = os.environ['COPYRIGHT']

# if autowidth:
# font.autoWidth(0, 0, font.em)
font.autoWidth(0, 0, font.em)

# Add valid space glyph to avoid "unknown character" box on IE11
glyph = font.createChar(32)
glyph.width = 200

outputInfo = {
	'em': font.em,
	'icons': {},
}

def addIcon(iconId, icon):
	glyph = font.createChar(icon['codepoint'], icon['name'])
	glyph.importOutlines(
		os.path.join(vectorsdir, (iconId+'.svg')),
	)
	glyph.left_side_bearing = 0
	glyph.right_side_bearing = 0

	outputInfo['icons'][iconId] = {
		'width': glyph.width,
	}

with open(jsonfile) as f:
	fontData = json.load(f)

for iconId, icon in fontData['icons'].items():
	addIcon(iconId, icon)

font.appendSFNTName("English (US)", "Version", fontData['version']['string'])
font.appendSFNTName("English (US)", "Vendor URL", os.environ['VENDORURL'])
font.version = fontData['version']['string']

font.generate(os.path.join(outputdir, fontname + '.ttf'))
font.generate(os.path.join(outputdir, fontname + '.woff'))
font.generate(os.path.join(outputdir, fontname + '.woff2'))

with open(outjsonfile, 'w') as f:
	json.dump(outputInfo, f, indent=2)
