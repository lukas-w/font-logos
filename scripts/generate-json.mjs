import fs from 'node:fs/promises';
import {tsvFileToObjects} from './tsv.mjs';
const iconsFile = './icons.tsv';

async function getIcons() {
	const startCodepoint = parseInt(process.env.START_CODEPOINT);
	let icons = tsvFileToObjects(iconsFile, {
		'offset': parseInt,
		'scale': s => s.toLowerCase() === 'true',
	})
		.map(r => ({...r, codepoint: startCodepoint + r.offset}))
		.map(r => ({...r, variant: r.id.endsWith('-inverse')}))
		.map(({id, ...r}) => [id, r])
	;
	icons = Object.fromEntries(icons);
	return icons;
}

async function readPackage() {
	return JSON.parse(await fs.readFile('package.json'));
}

const {version} = await readPackage();
const [major, minor, patch] = version.match(/^(\d+)\.(\d+)\.(\d+)/).slice(1);

const data = {
	name: process.env.FONT_NAME,
	version: {
		string: version,
		major, minor, patch,
		stable: parseInt(major) > 0 ? major : `${major}.${minor}.${patch}`,
	},
	icons: await getIcons(),
};

await fs.writeFile(
	process.env.OUTPUT_DIR + '/' + process.env.FONT_NAME + '.json', 
	JSON.stringify(data, null, 2)
);
