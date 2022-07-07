import fs from 'node:fs';
import nunjucks from 'nunjucks';
import font from './data.mjs';
import merge from 'lodash.merge';

const [templateFile, outFile] = process.argv.slice(2);

const outInfo = JSON.parse(
  fs.readFileSync(`${process.env.OUTPUT_DIR}/${process.env.FONT_NAME}.out.json`));

const context = {
	font: merge(font, outInfo),
	classPrefix: 'fl-',
	formats: [
		{name: 'woff', ext: 'woff'}, 
		{name: 'woff2', ext: 'woff2'}, 
		{name: 'truetype', ext: 'ttf'}, 
	],
	icons: font.icons,
	uniqueIcons: Object.fromEntries(Object.entries(font.icons).filter(([,icon]) => !icon.variant)),
};

const env = new nunjucks.Environment(new nunjucks.FileSystemLoader(), {
	throwOnUndefined: true,
});
env.addFilter('keys', obj => Object.keys(obj));
env.addFilter('values', obj => Object.values(obj));
env.addFilter('column', (objs, col) => objs.map(o => o[col]));
env.addFilter('map', (array, fn) => array.map(fn));
env.addFilter('maxLength', array => Math.max(...array.map(x => x.length)));

fs.writeFileSync(outFile, env.render(templateFile, context));
