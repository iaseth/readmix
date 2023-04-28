import fs from 'fs';
import { marked } from 'marked';

import { CmdOptionsType } from "./common";
import { helpers } from '../helpers';
import { renderString } from '../render';
import { RxFile } from '../rxfile';
import { rxEnv } from '../rxenv';



export function htmlCommand (rxFiles: RxFile[], cmdOptions: CmdOptionsType) {
	for (const entry of rxFiles) {
		const [codeText, contentText] = helpers.splitFile(entry.inputFilepath);
		const markdownText = renderString(contentText);
		const htmlText = marked.parse(markdownText);
		const text = rxEnv.docpageTemplate.render({rxFiles, entry, markdownText, htmlText});
		fs.writeFileSync(entry.htmlFilepath, text);
		console.log(`Saved: ${entry.htmlFilepath}`);
	}
}
