


export function Print (obj: any) : string {
	const jsonString = JSON.stringify(obj, null, "\t");
	return "```\n" + jsonString + "\n```";
}

export function PrintFunctionsTable (obj: any) : string {
	const keys = Object.keys(obj);
	const funcNames = keys.filter(k => typeof obj[k] === "function");
	let text = "| Function | Args |\n";
	text += "| --- | --- |\n";
	funcNames.forEach(funcName => {
		const func = obj[funcName];
		text += `| \`${funcName}()\` | ${func.length} |\n`;
	});

	return text;
}

export function PrintFiltersTable (filters: any) : string {
	const keys = Object.keys(filters);
	const funcNames = keys.filter(k => typeof filters[k] === "function");
	let text = "| Filter | Args |\n";
	text += "| --- | --- |\n";
	funcNames.forEach(funcName => {
		const func = filters[funcName];
		text += `| \`${funcName}\` | ${func.length - 1} |\n`;
	});

	return text;
}
