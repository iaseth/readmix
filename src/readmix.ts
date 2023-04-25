import { giveCredit } from "./utils";



interface ReadmixType {
	appName: string,
	giveCredit: () => string
};

export const Readmix: ReadmixType = {
	appName: "Readmix",
	giveCredit: giveCredit
};


