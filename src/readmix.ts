import { filters } from "./filters";
import { mixins } from "./mixins";

import descriptionsJson from './descriptions.json';



interface ReadmixType {
	appName: string,
	filters: any,
	mixins: any,

	descriptions: any,

	packageJson: any,
	packageLockJson: any,
};

export const Readmix: ReadmixType = {
	appName: "Readmix",
	filters: filters,
	mixins: mixins,

	descriptions: descriptionsJson,

	packageJson: mixins.parse("package.json"),
	packageLockJson: mixins.parse("package-lock.json"),
};
