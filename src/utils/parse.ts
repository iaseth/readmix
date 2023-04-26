import fs from 'fs';



export function parse (filepath: string, extension = ""): any {
	if (!fs.existsSync(filepath)) {
		return null;
	}

	const stat = fs.statSync(filepath);
	if (!stat.isFile()) {
		return null;
	}

	extension = extension.toLowerCase();
	const fileText = fs.readFileSync(filepath, {encoding:'utf8'});

	if (filepath.endsWith(".json") || extension === "json") {
		try {
			const jo = JSON.parse(fileText);
			return jo;
		} catch (error) {
			return null;
		}
	}

	if (filepath.endsWith(".toml") || extension === "toml") {
		return null;
	}

	if (filepath.endsWith(".yaml") || extension === "yaml") {
		return null;
	}
}
