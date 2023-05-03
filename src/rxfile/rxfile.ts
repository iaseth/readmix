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
		this.outputFilepath = this.basepath;
		this.htmlFilepath = this.basepath + ".html";
		this.pdfFilepath = this.basepath + ".pdf";
	}

	getInputFileMTime () {
		return helpers.getFileMtime(this.inputFilepath);
	}

	getOutputFileMTime () {
		return helpers.getFileMtime(this.outputFilepath);
	}

	needsUpdate () {
		if (this.getInputFileMTime() > this.getOutputFileMTime()) {
			return true;
		}
		return false;
	}

	splitFile () : RxFileLine[][] {
		const { inputFilepath } = this;
		if (!inputFilepath.endsWith(".rx")) {
			return [[], []];
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

		const inputLinesSanitized = inputLines.map(helpers.sanitizeRxLine);
		const inputLinesWithoutComments = inputLinesSanitized.filter(helpers.isNotAComment);	
		const codeLines = inputLinesWithoutComments.filter(helpers.isCode).map(helpers.sanitizeCodeLine);
		const contentLines = inputLinesWithoutComments.filter(helpers.isContent);

		const sugarLines = contentLines.filter(helpers.isSugar);
		sugarLines.forEach(deSugarize);
	
		return [codeLines, contentLines];
	}

	get codeText () {
		const [codeLines, contentLines] = this.splitFile();
		const codeText = codeLines.map(helpers.indentLine).join("\n");
		return codeText;
	}

	get contentText () {
		const [codeLines, contentLines] = this.splitFile();
		const contentText = contentLines.map(helpers.indentLine).join("\n");
		return contentText;
	}

	renderString () {
		const outputFileText = renderString(this);
		return outputFileText;
	}

	compileMarkdown (forceUpdate=false) {
		console.log(`Input: ${this.inputFilepath}`);	
		fs.writeFileSync(this.outputFilepath, this.renderString());
		console.log(`\tsaved: ${this.outputFilepath}`);
	}

	compileHtml (forceUpdate=false) {
		const markdownText = this.renderString();
		const htmlText = marked.parse(markdownText);
		const text = rxEnv.docpageTemplate.render({
			entry: this,
			markdownText, htmlText
		});

		fs.writeFileSync(this.htmlFilepath, text);
		console.log(`Saved: ${this.htmlFilepath}`);
	}

	renderMarkdownString () {
		const markdownText = this.renderString();
		return markdownText;
	}

	renderHtmlString () {
		const markdownText = this.renderMarkdownString();
		const htmlText = marked.parse(markdownText);
		return htmlText;
	}

	watch () {
		const self = this;
		fs.watch(this.inputFilepath, function (event, filename) {
			if (filename) {
				console.log('File changed on disk: ' + filename);
				if (self.needsUpdate()) {
					self.compileMarkdown();
				}
			} else {
				console.log("Filename not provided!");
			}
		});
	}
}
