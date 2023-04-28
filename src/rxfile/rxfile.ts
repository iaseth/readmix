import fs from "fs";
import { marked } from 'marked';

import { helpers } from "../helpers";
import { renderString } from "../render";
import { rxEnv } from "../rxenv";



export class RxFile {
	readonly inputFilepath: string;
	readonly inputFileExists: boolean;

	readonly basepath: string;
	readonly pageURL: string;
	readonly outputFilepath: string;
	readonly htmlFilepath: string;
	readonly pdfFilepath: string;

	next: RxFile|null = null;
	prev: RxFile|null = null;

	constructor(inputFilepath: string) {
		this.inputFilepath = inputFilepath;
		this.inputFileExists = helpers.fileExists(this.inputFilepath);

		this.basepath = inputFilepath.slice(0, -3);
		this.pageURL = `rx/${this.basepath}`;
		this.outputFilepath = this.basepath + ".md";
		this.htmlFilepath = this.basepath + ".html";
		this.pdfFilepath = this.basepath + ".pdf";
	}

	compileMarkdown (forceUpdate=false) {
		console.log(`Input: ${this.inputFilepath}`);
		const [codeText, contentText] = helpers.splitFile(this.inputFilepath);
	
		const outputFileText = renderString(contentText);
		fs.writeFileSync(this.outputFilepath, outputFileText);
		console.log(`\tsaved: ${this.outputFilepath}`);
	}

	compileHtml (forceUpdate=false) {
		const [codeText, contentText] = helpers.splitFile(this.inputFilepath);
		const markdownText = renderString(contentText);
		const htmlText = marked.parse(markdownText);
		const text = rxEnv.docpageTemplate.render({
			entry: this,
			markdownText, htmlText
		});

		fs.writeFileSync(this.htmlFilepath, text);
		console.log(`Saved: ${this.htmlFilepath}`);
	}
}
