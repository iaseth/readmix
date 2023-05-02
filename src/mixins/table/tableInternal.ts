


function getSeparatorText (columnLengths: number[]) {
	let rowText = "|";
	for (const c of columnLengths) {
		rowText += " " + "---".padEnd(c, "-") + " |"
	}
	return rowText;
}

function getRowText (row: string[], columnLengths: number[], monoColumns: boolean[]) {
	let rowText = "|";
	for (const i in row) {
		const colText = monoColumns[i] ? "`" + row[i] + "`" : row[i];
		rowText += " " + colText.padEnd(columnLengths[i]) + " |";
	}
	return rowText;
}

export function tableInternal (rows: string[][], header: string[]) : string {
	const monoColumns = header.map(h => h.startsWith("`") && h.endsWith("`"));
	const headerengths = header.map(h => h.length);
	const columnLengthsX = headerengths.map((h, i) => {
		for (const row of rows) {
			if (row[i].length > h) {
				h = row[i].length;
			}
		}
		return h;
	});

	const columnLengths = columnLengthsX.map((c, i) => monoColumns[i] ? c+2 : c)

	let text = "";
	text += getRowText(header, columnLengths, []) + "\n";
	text += getSeparatorText(columnLengths) + "\n";

	for (const row of rows) {
		text += getRowText(row, columnLengths, monoColumns) + "\n";
	}
	return text;
}
