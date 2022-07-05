import fs from 'node:fs';

const I = x=>x;

export function tsvFileToObjects(file, parsers) {
	let [cols, ...rows] = fs.readFileSync(file, 'utf8')
		.toString()
		.split('\n')
		.map(r => r
			.split('\t')
			// Allow for multiple \t between columns
			.map(t => t.trim())
			.filter(I)
		)
		// Remove empty rows
		.filter(r => r.length)
	;
	
	// Sanity check rows
	const invalidRows = rows.filter(r => r.length !== cols.length);
	if (invalidRows.length) {
		throw new Error(`Some rows have wrong number of columns:\n${invalidRows.join('\n')}`);
	}

	return rows.map(r => Object.fromEntries(
		cols.map(
			(c, i) => [c, (parsers[c] || I)(r[i])]
		)
	));
}
