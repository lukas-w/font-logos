import fs from 'node:fs';
import {tsvFileToObjects} from './tsv.mjs';
const iconsFile = './icons.tsv';

function getIcons() {
	const startCodepoint = parseInt(process.env.START_CODEPOINT);
	return tsvFileToObjects(iconsFile, {
		'offset': parseInt,
	})
		.map(r => ({...r, codepoint: startCodepoint + r.offset}))
	;
}

function readPackage() {
	return JSON.parse(fs.readFileSync('package.json'));
}

const {version} = readPackage();
const [major, minor, patch] = version.match(/^(\d+)\.(\d+)\.(\d+)/).slice(1);

const data = {
	name: process.env.FONT_NAME,
	version: {
		string: version,
		major, minor, patch,
		stable: parseInt(major) > 0 ? major : `${major}.${minor}.${patch}`,
	},
	icons: getIcons(),
};

fs.writeFileSync(
	process.env.OUTPUT_DIR + '/' + process.env.FONT_NAME + '.json', 
	JSON.stringify(data, null, 2)
);
