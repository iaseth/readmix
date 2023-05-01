import { PrintPropsTable } from "../filters/print";
import { Readmix } from "../readmix";



export function dependencyTable () {
	if (!Readmix.packageJson) {
		return "`packageJson` NOT Found!";
	} else if (!Readmix.packageJson.dependencies) {
		return "`packageJson.dependencies` NOT Found!";
	} else {
		return PrintPropsTable(Readmix.packageJson.dependencies, ["Package", "Version"]);
	}
}

export function devDependencyTable () {
	if (!Readmix.packageJson) {
		return "`packageJson` NOT Found!";
	} else if (!Readmix.packageJson.devDependencies) {
		return "`packageJson.devDependencies` NOT Found!";
	} else {
		return PrintPropsTable(Readmix.packageJson.devDependencies, ["Package", "Version"]);
	}
}
