import os
import tempfile
import json
import fontforge

autowidth = False
font_em = 512
font_design_size = 16
fontname = os.environ['FONT_NAME']
outputdir = os.environ['OUTPUT_DIR']
vectorsdir = 'vectors'
start_codepoint = int(os.environ['START_CODEPOINT'], base=0)
design_px = font_em // font_design_size

font = fontforge.font()
# font.encoding = 'UnicodeFull'
font.fontname = fontname
font.familyname = fontname
font.fullname = fontname
font.design_size = font_design_size
font.em = font_em

# if autowidth:
# font.autoWidth(0, 0, font.em)
font.autoWidth(0, 0, font.em)

# Add valid space glyph to avoid "unknown character" box on IE11
glyph = font.createChar(32)
glyph.width = 200

def addGlyph(name, source, code):
	glyph = font.createChar(code, name)
	glyph.importOutlines(source)
	glyph.left_side_bearing = 0
	glyph.right_side_bearing = 0

with open(f'{outputdir}/{fontname}.json') as f:
	for icon in json.load(f)['icons']:
		addGlyph(icon['name'], os.path.join(vectorsdir, (icon['id']+'.svg')), start_codepoint+int(icon['offset']))

font.generate(os.path.join(outputdir, fontname + '.ttf'))
font.generate(os.path.join(outputdir, fontname + '.woff'))
font.generate(os.path.join(outputdir, fontname + '.woff2'))
