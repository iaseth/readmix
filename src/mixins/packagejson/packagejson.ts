import { Readmix } from "../../readmix";
import { objectTable } from "../table";



function dependencyTable () {
	if (!Readmix.packageJson) {
		return "`packageJson` NOT Found!";
	} else if (!Readmix.packageJson.dependencies) {
		return "`packageJson.dependencies` NOT Found!";
	} else if (Readmix.packageJson.dependencies.length === 0) {
		return "This package has no dependencies.";
	} else {
		return objectTable(Readmix.packageJson.dependencies, ["", "`Package`", "`Version`"]);
	}
}

function devDependencyTable () {
	if (!Readmix.packageJson) {
		return "`packageJson` NOT Found!";
	} else if (!Readmix.packageJson.devDependencies) {
		return "`packageJson.devDependencies` NOT Found!";
	} else if (Readmix.packageJson.devDependencies.length === 0) {
		return "This package has no devDependencies.";
	} else {
		return objectTable(Readmix.packageJson.devDependencies, ["", "`Package`", "`Version`"]);
	}
}

export const packagejson = {
	dependencyTable,
	devDependencyTable,
};
