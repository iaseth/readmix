


interface ObjectType {
	[key: string]: string
}

function tableInternal (rows: string[][], header: string[]) : string {
	const columnLengths = header.map(h => h.length);

	let text = "";
	text += `| ${header[0]} | ${header[1]} |\n`;
	text += "| --- | --- |\n";

	rows.forEach(row => {
		text += `| \`${row[0]}\` | \`${row[1]}\` |\n`;
	});
	return text;
}

export function arrayTable (arr: ObjectType[]) : string {
	return "";
}

export function objectTable (obj: ObjectType, header: string[] = ["Key", "Value"]) : string {
	const rows = Object.keys(obj).map(k => [k, obj[k]]);
	return tableInternal(rows, header);
}

export function table () : string {
	return "";
}
