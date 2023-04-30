import fs from "fs";
import { marked } from 'marked';

import { helpers } from "../helpers";
import { renderString } from "./render";
import { rxEnv } from "../rxenv";
import { deSugarize } from "../sugars";



export interface RxFileLine {
	number: number,
	text: string,
	indent: number,
}

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

	splitFile () : string[] {
		const { inputFilepath } = this;
		if (!inputFilepath.endsWith(".rx")) {
			return ["", ""];
		}
	
		const inputText = fs.readFileSync(inputFilepath, {encoding:'utf8'});
		const inputLines = inputText.split("\n").map((lineText, idx) => {
			const line: RxFileLine = {
				number: idx+1,
				text: lineText,
				indent: 0,
			};
			return line;
		});
		const inputLinesWithoutComments = inputLines.filter(line => helpers.isNotAComment(line.text));
	
		const codeLines = inputLinesWithoutComments.filter(line => helpers.isCode(line.text));
		const codeLinesSanitized = codeLines.map(line => helpers.sanitizeCodeLine(line.text));
		const codeText = codeLinesSanitized.join("\n");
	
		const contentLines = inputLinesWithoutComments.filter(line => helpers.isRx(line.text));
		const contentLinesSanitized = contentLines.map(line => helpers.sanitizeRxLine(line.text));
		const contentText = contentLinesSanitized.join("\n");
	
		return [codeText, contentText];
	}

	compileMarkdown (forceUpdate=false) {
		console.log(`Input: ${this.inputFilepath}`);
		const [codeText, contentText] = this.splitFile();
	
		const outputFileText = renderString(contentText);
		fs.writeFileSync(this.outputFilepath, outputFileText);
		console.log(`\tsaved: ${this.outputFilepath}`);
	}

	compileHtml (forceUpdate=false) {
		const [codeText, contentText] = this.splitFile();
		const markdownText = renderString(contentText);
		const htmlText = marked.parse(markdownText);
		const text = rxEnv.docpageTemplate.render({
			entry: this,
			markdownText, htmlText
		});

		fs.writeFileSync(this.htmlFilepath, text);
		console.log(`Saved: ${this.htmlFilepath}`);
	}

	renderMarkdownString () {
		const [codeText, contentText] = this.splitFile();
		const markdownText = renderString(contentText);
		return markdownText;
	}

	renderHtmlString () {
		const markdownText = this.renderMarkdownString();
		const htmlText = marked.parse(markdownText);
		return htmlText;
	}
}
