import fs from 'fs';
import path from 'path';
import nunjucks from 'nunjucks';
import { marked } from 'marked';

import { EntryType } from "../helpers/rx";
import { CmdOptionsType } from "./common";
import { helpers } from '../helpers';
import { renderString } from '../render';



export function htmlCommand (entries: EntryType[], cmdOptions: CmdOptionsType) {
	const homepageTemplatesPath = require.resolve('../../templates/homepage.html');
	const templatesPath = path.dirname(homepageTemplatesPath);

	const env = new nunjucks.Environment(new nunjucks.FileSystemLoader(templatesPath));
	const docpageTemplate = env.getTemplate("docpage.html");

	for (const entry of entries) {
		const [codeText, contentText] = helpers.splitFile(entry.inputFilepath);
		const markdownText = renderString(contentText);
		const htmlText = marked.parse(markdownText);
		const text = docpageTemplate.render({entries, entry, markdownText, htmlText});
		fs.writeFileSync(entry.htmlFilepath, text);
		console.log(`Saved: ${entry.htmlFilepath}`);
	}
}
