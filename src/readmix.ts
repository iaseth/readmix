import { filters } from "./filters";
import { utils } from "./utils";
import { parse } from "./utils/parse";



interface ReadmixType {
	appName: string,
	filters: any,
	utils: any,

	packageJson: any,
	packageLockJson: any,
};

export const Readmix: ReadmixType = {
	appName: "Readmix",
	filters: filters,
	utils: utils,

	packageJson: parse("package.json"),
	packageLockJson: parse("package-lock.json"),
};
