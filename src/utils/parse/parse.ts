import fs from 'fs';



export function parse (filepath: string, format = ""): any {
	if (!fs.existsSync(filepath)) {
		return null;
	}

	const stat = fs.statSync(filepath);
	if (!stat.isFile()) {
		return null;
	}

	format = format.toLowerCase();
	const fileText = fs.readFileSync(filepath, {encoding:'utf8'});

	if (filepath.endsWith(".json") || format === "json") {
		try {
			const jo = JSON.parse(fileText);
			return jo;
		} catch (error) {
			return {};
		}
	}

	if (filepath.endsWith(".toml") || format === "toml") {
		return null;
	}

	if (filepath.endsWith(".yaml") || format === "yaml") {
		return null;
	}

	if (filepath.endsWith(".csv") || format === "csv") {
		return null;
	}

	if (filepath.endsWith(".xml") || format === "xml") {
		return null;
	}

	if (filepath.endsWith(".html") || format === "html") {
		return null;
	}

	if (filepath.endsWith(".css") || format === "css") {
		return null;
	}

	if (filepath.endsWith(".js") || format === "js") {
		return null;
	}

	if (filepath.endsWith(".md") || format === "md") {
		return null;
	}
}
