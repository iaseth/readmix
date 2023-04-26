import path from 'path';
import http from 'http';
import nunjucks from 'nunjucks';

import { EntryType } from "../helpers/rx";
import { CmdOptionsType } from "./common";

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
		res.setHeader('Content-Type', 'text/html');
		const text = homepageTemplate.render({entries});
		res.end(text);
	});

	server.listen(PORT, HOSTNAME, () => {
		console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
	});
}
