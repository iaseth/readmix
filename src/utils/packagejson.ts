import { PrintPropsTable } from "../filters/print";
import { Readmix } from "../readmix";



export function dependencyTable () {
	return PrintPropsTable(Readmix.packageJson.dependencies, ["Package", "Version"]);
}

export function devDependencyTable () {
	return PrintPropsTable(Readmix.packageJson.devDependencies, ["Package", "Version"]);
}
