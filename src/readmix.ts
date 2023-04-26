import { commands } from "./commands";
import { filters } from "./filters";
import { helpers } from "./helpers";
import { mixins } from "./mixins";
import { utils } from "./utils";

import descriptionsJson from './descriptions.json';



interface ReadmixType {
	appName: string,
	commands: any,
	filters: any,
	helpers: any,
	mixins: any,
	utils: any,

	descriptions: any,

	packageJson: any,
	packageLockJson: any,
	rxconfigJson: any,
};

export const Readmix: ReadmixType = {
	appName: "Readmix",
	commands: commands,
	filters: filters,
	helpers: helpers,
	mixins: mixins,
	utils: utils,

	descriptions: descriptionsJson,

	packageJson: utils.parse("package.json"),
	packageLockJson: utils.parse("package-lock.json"),
	rxconfigJson: utils.parse("rxconfig.json"),
};
