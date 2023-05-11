import { Readmix } from "../../readmix";
import { objectTable } from "../table";
import { tableInternal } from "../table/tableInternal";



export function packageDetails () {
	if (!Readmix.packageJson) {
		return "`packageJson` NOT Found!";
	}

	const pj = Readmix.packageJson;
	const rows = [];
	if (pj.name) rows.push(["Name", pj.name]);
	if (pj.description) rows.push(["Description", pj.description]);
	if (pj.version) rows.push(["Version", pj.version]);
	if (pj.author) rows.push(["Author", pj.author]);
	if (pj.homepage) rows.push(["Homepage", pj.homepage]);
	if (pj.repository) rows.push(["Repository", pj.repository]);
	if (pj.license) rows.push(["License", pj.license]);

	const dependenciesCount = pj.dependencies ? Object.keys(pj.dependencies).length : 0;
	rows.push(["Dependencies", dependenciesCount]);

	return tableInternal(rows, ["`Name`", "`Value`"]);
}

export function dependencyTable () {
	if (!Readmix.packageJson) {
		return "`packageJson` NOT Found!";
	} else if (!Readmix.packageJson.dependencies) {
		return "This package has no dependencies.";
	} else if (Readmix.packageJson.dependencies.length === 0) {
		return "This package has no dependencies.";
	} else {
		return objectTable(Readmix.packageJson.dependencies, ["", "`Package`", "`Version`"]);
	}
}

export function devDependencyTable () {
	if (!Readmix.packageJson) {
		return "`packageJson` NOT Found!";
	} else if (!Readmix.packageJson.devDependencies) {
		return "This package has no devDependencies.";
	} else if (Readmix.packageJson.devDependencies.length === 0) {
		return "This package has no devDependencies.";
	} else {
		return objectTable(Readmix.packageJson.devDependencies, ["", "`Package`", "`Version`"]);
	}
}
