import fs from 'fs';
import { parseCss } from './css';
import { parseCsv } from './csv';
import { parseHtml } from './html';
import { parseJson } from './json';
import { parseToml } from './toml';
import { parseXml } from './xml';
import { parseYaml } from './yaml';



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
		return parseJson(fileText);
	}

	if (filepath.endsWith(".toml") || format === "toml") {
		return parseToml(fileText);
	}

	if (filepath.endsWith(".yaml") || format === "yaml") {
		return parseYaml(fileText);
	}

	if (filepath.endsWith(".csv") || format === "csv") {
		return parseCsv(fileText);
	}

	if (filepath.endsWith(".xml") || format === "xml") {
		return parseXml(fileText);
	}

	if (filepath.endsWith(".html") || format === "html") {
		return parseHtml(fileText);
	}

	if (filepath.endsWith(".css") || format === "css") {
		return parseCss(fileText);
	}

	if (filepath.endsWith(".js") || format === "js") {
		return null;
	}

	if (filepath.endsWith(".md") || format === "md") {
		return null;
	}
}
