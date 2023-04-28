import fs from 'fs';

import { CmdOptionsType } from "./common";
import { RxFile } from '../rxfile';



export function htmlCommand (rxFiles: RxFile[], cmdOptions: CmdOptionsType) {
	rxFiles.forEach(f => f.compileHtml());
}
