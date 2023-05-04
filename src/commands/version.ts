import { mixins } from "../mixins";
import { RxFile } from "../rxfile";
import { CmdOptionsType } from "./common";



export function versionCommand (rxFiles: RxFile[], cmdOptions: CmdOptionsType) {
	const packageDetails = mixins.npm.packageDetails();
	console.log(packageDetails);
}
