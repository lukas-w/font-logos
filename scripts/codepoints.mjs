import fs from 'node:fs';
const iconsFile = './icons.tsv';

function getCodepoints() {
	const startCodepoint = parseInt(process.env.START_CODEPOINT);
	let lines = fs.readFileSync(iconsFile, 'utf8')
		.toString()
		.split('\n')
		.slice(1)
		.map(line => line.trim())
		.filter(line => line)
		.map(line => line.split('\t'))
		.map(([offset, icon]) => [icon, startCodepoint + parseInt(offset)]);
	return Object.fromEntries(lines);
}

export default getCodepoints();
