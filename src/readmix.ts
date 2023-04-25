import { filters } from "./filters";
import { utils } from "./utils";



interface ReadmixType {
	appName: string,
	filters: any,
	utils: any
};

export const Readmix: ReadmixType = {
	appName: "Readmix",
	filters: filters,
	utils: utils
};
