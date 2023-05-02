


function getSeparatorText (columnLengths: number[]) {
	let rowText = "|";
	for (const c of columnLengths) {
		rowText += " " + "---".padEnd(c, "-") + " |"
	}
	return rowText;
}

function getRowText (row: string[], columnLengths: number[]) {
	let rowText = "|";
	for (const i in row) {
		rowText += " " + row[i].padEnd(columnLengths[i]) + " |"
	}
	return rowText;
}

export function tableInternal (rows: string[][], header: string[]) : string {
	const headerengths = header.map(h => h.length);
	const columnLengths = headerengths.map((h, i) => {
		for (const row of rows) {
			if (row[i].length > h) {
				h = row[i].length;
			}
		}
		return h;
	});

	let text = "";
	text += getRowText(header, columnLengths) + "\n";
	text += getSeparatorText(columnLengths) + "\n";

	for (const row of rows) {
		text += getRowText(row, columnLengths) + "\n";
	}
	return text;
}
