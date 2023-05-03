import fs from 'fs';
import path from 'path';



const a3 = "```\n";

export function File (filepath: string): string {
	if (fs.existsSync(filepath)) {
		const contents = fs.readFileSync(filepath, {encoding:'utf8'});
		return contents;
	} else {
		return `File not found: ${filepath}\n`;
	}
}

export function CodeFile (filepath: string): string {
	const contents = `Contents of ${filepath}`;
	return a3 + File(filepath) + a3;
}
