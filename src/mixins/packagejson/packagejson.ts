import { Readmix } from "../../readmix";
import { objectTable } from "../table";



function dependencyTable () {
	if (!Readmix.packageJson) {
		return "`packageJson` NOT Found!";
	} else if (!Readmix.packageJson.dependencies) {
		return "`packageJson.dependencies` NOT Found!";
	} else {
		return objectTable(Readmix.packageJson.dependencies, ["", "`Package`", "`Version`"], true);
	}
}

function devDependencyTable () {
	if (!Readmix.packageJson) {
		return "`packageJson` NOT Found!";
	} else if (!Readmix.packageJson.devDependencies) {
		return "`packageJson.devDependencies` NOT Found!";
	} else {
		return objectTable(Readmix.packageJson.devDependencies, ["", "`Package`", "`Version`"], true);
	}
}

export const packagejson = {
	dependencyTable,
	devDependencyTable,
};
