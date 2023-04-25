import fs from 'fs';



export function parse (filepath: string): any {
	if (!fs.existsSync(filepath)) {
		return null;
	}

	const stat = fs.statSync(filepath);
	if (!stat.isFile()) {
		return null;
	}

	const fileText = fs.readFileSync(filepath, {encoding:'utf8'});
	if (filepath.endsWith(".json")) {
		const jo = JSON.parse(fileText);
		return jo;
	}
}
