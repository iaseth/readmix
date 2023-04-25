import { filters } from "./filters";
import { utils } from "./utils";

import descriptionsJson from './descriptions.json';



interface ReadmixType {
	appName: string,
	filters: any,
	utils: any,

	descriptions: any,

	packageJson: any,
	packageLockJson: any,
};

export const Readmix: ReadmixType = {
	appName: "Readmix",
	filters: filters,
	utils: utils,

	descriptions: descriptionsJson,

	packageJson: utils.parse("package.json"),
	packageLockJson: utils.parse("package-lock.json"),
};
