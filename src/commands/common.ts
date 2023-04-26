


export interface CmdOptionsType {
	compile: boolean       // compile all files
	debug: boolean,        // debug mode on/off
	force: boolean,        // force update even if output file exists and is newer than input file
	init: boolean,         // initialize Readmix in current directory, create a rxconfig.json
	list: boolean,         // just list all the input files
	open: boolean,         // open the preview page default web browser
	preview: boolean,      // run a local server for previewing output in browser
	recursive: boolean,    // recurse into sub-directories
	status: boolean,       // print update status of all files
	watch: boolean,        // watch files for changes
}

export function getDefaultCmdOptions () : CmdOptionsType {
	const options: CmdOptionsType = {
		compile: false,
		debug: false,
		force: false,
		init: false,
		list: false,
		open: false,
		preview: false,
		recursive: false,
		status: false,
		watch: false,
	};
	return options;
}
