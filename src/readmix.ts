import { filters } from "./filters";
import { mixins } from "./mixins";
import { utils } from "./utils";

import descriptionsJson from './descriptions.json';



interface ReadmixType {
	appName: string,
	filters: any,
	mixins: any,
	utils: any,

	descriptions: any,

	packageJson: any,
	packageLockJson: any,
};

export const Readmix: ReadmixType = {
	appName: "Readmix",
	filters: filters,
	mixins: mixins,
	utils: utils,

	descriptions: descriptionsJson,

	packageJson: mixins.parse("package.json"),
	packageLockJson: mixins.parse("package-lock.json"),
};
