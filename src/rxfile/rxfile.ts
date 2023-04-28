import fs from "fs";
import { helpers } from "../helpers";
import { renderString } from "../render";



export class RxFile {
	inputFilepath: string;
	inputFileExists: boolean;

	basepath: string;
	pageURL: string;
	outputFilepath: string;
	htmlFilepath: string;
	pdfFilepath: string;

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
}
