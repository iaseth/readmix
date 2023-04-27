import { helpers } from "../helpers";



export class RxFile {
	inputFilepath: string;
	inputFileExists: boolean;

	basepath: string;
	pageURL: string;
	outputFilepath: string;
	htmlFilepath: string;
	pdfFilepath: string;

	constructor(inputFilepath: string) {
		this.inputFilepath = inputFilepath;
		this.inputFileExists = helpers.fileExists(this.inputFilepath);

		this.basepath = inputFilepath.slice(0, -3);
		this.pageURL = `rx/${this.basepath}`;
		this.outputFilepath = this.basepath + ".md";
		this.htmlFilepath = this.basepath + ".html";
		this.pdfFilepath = this.basepath + ".pdf";
	}
}
