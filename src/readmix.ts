import { giveCredit, parse } from "./utils";



interface ReadmixType {
	appName: string,
	giveCredit: () => string,
	parse: (filepath: string) => any
};

export const Readmix: ReadmixType = {
	appName: "Readmix",
	giveCredit: giveCredit,
	parse: parse
};


