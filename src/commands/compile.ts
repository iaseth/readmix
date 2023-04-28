import { RxFile } from "../rxfile";
import { CmdOptionsType } from "./common";



export function compileCommand (rxFiles: RxFile[], cmdOptions: CmdOptionsType) {
	rxFiles.forEach(f => f.compileMarkdown());
}
