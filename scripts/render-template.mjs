import fs from 'node:fs';
import nunjucks from 'nunjucks';
import font from './data.mjs';

const [templateFile, outFile] = process.argv.slice(2);

const context = {
	font,
	classPrefix: 'fl-',
	formats: [
		{name: 'woff', ext: 'woff'}, 
		{name: 'woff2', ext: 'woff2'}, 
		{name: 'truetype', ext: 'ttf'}, 
	],
	icons: font.icons,
	uniqueIcons: font.icons.filter(i => !i.id.endsWith('-inverse')),
};

const env = new nunjucks.Environment(new nunjucks.FileSystemLoader(), {
	throwOnUndefined: true,
});
env.addFilter('column', (objs, col) => objs.map(o => o[col]));
env.addFilter('map', (array, fn) => array.map(fn));
env.addFilter('maxLength', array => Math.max(...array.map(x => x.length)));

fs.writeFileSync(outFile, env.render(templateFile, context));
