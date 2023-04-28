import { RxFile } from "../rxfile";
import { CmdOptionsType } from "./common";



export function compileCommand (rxFiles: RxFile[], cmdOptions: CmdOptionsType) {
	if (cmdOptions.html) {
		rxFiles.forEach(f => f.compileHtml());
	}

	if (cmdOptions.markdown) {
		rxFiles.forEach(f => f.compileMarkdown());
	}
}
