


function giveCredit () : string {
	return "## Credit\n\nThis file was generated using [`readmix`](https://github.com/iaseth/readmix).\n";
}

interface ReadmixType {
	appName: string,
	giveCredit: () => string
};

export const Readmix: ReadmixType = {
	appName: "Readmix",
	giveCredit: giveCredit
};


