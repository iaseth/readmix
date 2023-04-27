import fs from 'fs';
import path from 'path';
import http from 'http';
import nunjucks from 'nunjucks';
import { marked } from 'marked';

import { EntryType } from "../helpers/rx";
import { CmdOptionsType } from "./common";
import { helpers } from '../helpers';
import { renderString } from '../render';

const HOSTNAME = '127.0.0.1';
const PORT = 1996;

export function previewCommand (entries: EntryType[], cmdOptions: CmdOptionsType) {
	const homepageTemplatesPath = require.resolve('../../templates/homepage.html');
	const templatesPath = path.dirname(homepageTemplatesPath);

	const env = new nunjucks.Environment(new nunjucks.FileSystemLoader(templatesPath));
	const homepageTemplate = env.getTemplate("homepage.html");
	const docpageTemplate = env.getTemplate("docpage.html");

	const server = http.createServer((req, res) => {
		res.statusCode = 200;

		const { url } = req;
		if (url?.startsWith("/static/")) {
			const staticFilepath = url.slice(8);
			const fullpath = path.join("templates/static", staticFilepath);
			try {
				res.end(fs.readFileSync(fullpath, {encoding: "utf-8"}));
			} catch (error) {
				res.end(`Error 404: "${fullpath}"`);
			}
		} else if (url?.startsWith("/rx/")) {
			const documentPath = url.slice(4);
			const entryIndex = entries.findIndex(x => x.basepath === documentPath);
			if (entryIndex !== -1) {
				const entry = entries[entryIndex];

				let next: EntryType|null = null;
				let prev: EntryType|null = null;
				if (entries.length > 1) {
					next = entries[entryIndex+1 === entries.length ? 0 : entryIndex+1];
					prev = entries[entryIndex === 0 ? entries.length-1 : entryIndex-1];
				}

				const [codeText, contentText] = helpers.splitFile(entry.inputFilepath);
				const markdownText = renderString(contentText);
				const htmlText = marked.parse(markdownText);
				const text = docpageTemplate.render({
					entries, entry,
					next, prev,
					markdownText, htmlText
				});
				res.setHeader('Content-Type', 'text/html');
				res.end(text);
			} else {
				res.setHeader('Content-Type', 'text/html');
				res.end(`Error 404: "${documentPath}"`);
			}
		} else {
			const text = homepageTemplate.render({entries});
			res.setHeader('Content-Type', 'text/html');
			res.end(text);
		}
	});

	server.listen(PORT, HOSTNAME, () => {
		console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
	});
}
