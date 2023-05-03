import fs from 'fs';
import { RxFile } from "../rxfile";
import { CmdOptionsType } from "./common";



export function watchCommand (rxFiles: RxFile[], cmdOptions: CmdOptionsType) {
	console.log(`Readmix is watching the following files for changes:`);
	for (const idx in rxFiles) {
		const n = parseInt(idx) + 1;
		const rxFile = rxFiles[idx];
		console.log(`\t#${n} => ${rxFile.inputFilepath}`);
		console.log(`\t\toutput => ${rxFile.outputFilepath}`);
	}

	rxFiles.forEach(rxFile => rxFile.watch());
}
