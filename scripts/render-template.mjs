import fs from 'node:fs';
import nunjucks from 'nunjucks';
import codepoints from './codepoints.mjs';

const [templateName] = process.argv.slice(2);

const context = {
	fontName: process.env.FONT_NAME,
	classPrefix: 'fl-',
	formats: [
		{name: 'woff', ext: 'woff'}, 
		{name: 'woff2', ext: 'woff2'}, 
		{name: 'truetype', ext: 'ttf'}, 
	],
	icons: Object.keys(codepoints),
	uniqueIcons: Object.keys(codepoints).filter(i => !i.endsWith('-inverse')),
	glyphs: codepoints,
};

nunjucks.configure({throwOnUndefined: true});

fs.writeFileSync(
	`${process.env.OUTPUT_DIR}/${templateName}`,
	nunjucks.render(`./templates/${templateName}.njk`, context)
);
