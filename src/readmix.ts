import { commands } from "./commands";
import { flags } from "./commands/common";
import { filters } from "./filters";
import { helpers } from "./helpers";
import { mixins } from "./mixins";
import { sugars } from "./sugars";
import { utils } from "./utils";

import descriptionsJson from './descriptions.json';



interface ReadmixType {
	appName: string,
	commands: any,
	filters: any,
	flags: any,
	helpers: any,
	mixins: any,
	sugars: any,
	utils: any,

	descriptions: any,

	packageJson: any,
	packageLockJson: any,
	tsconfigJson: any,
	rxconfigJson: any,

	gitconfig: any,
};

export const Readmix: ReadmixType = {
	appName: "Readmix",
	commands: commands,
	filters: filters,
	flags: flags,
	helpers: helpers,
	mixins: mixins,
	sugars: sugars,
	utils: utils,

	descriptions: descriptionsJson,

	packageJson: utils.parse("package.json"),
	packageLockJson: utils.parse("package-lock.json"),
	tsconfigJson: utils.parse("tsconfig.json"),
	rxconfigJson: utils.parse("rxconfig.json"),

	gitconfig: utils.parse(".git/config", "ini"),
};
