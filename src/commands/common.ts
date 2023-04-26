


export interface CmdOptionsType {
	compile: boolean,      // compile all files
	debug: boolean,        // debug mode on/off
	force: boolean,        // force update even if output file exists and is newer than input file
	html: boolean,         // HTML mode on/off
	init: boolean,         // initialize Readmix in current directory, create a rxconfig.json
	list: boolean,         // just list all the input files
	markdown: boolean,     // MarkDown mode on/off
	open: boolean,         // open the preview page default web browser
	preview: boolean,      // run a local server for previewing output in browser
	recursive: boolean,    // recurse into sub-directories
	status: boolean,       // print update status of all files
	version: boolean,      // print Readmix version
	watch: boolean,        // watch files for changes
}

export function getDefaultCmdOptions () : CmdOptionsType {
	const options: CmdOptionsType = {
		compile: false,
		debug: false,
		force: false,
		html: false,
		init: false,
		list: false,
		markdown: false,
		open: false,
		preview: false,
		recursive: false,
		status: false,
		version: false,
		watch: false,
	};
	return options;
}

export interface FlagType {
	name: string,
	singleFlag: string,
	doubleFlag: string,
	description: string
}

export const flags: FlagType[] = [
	{name: "compile", singleFlag: "-C", doubleFlag: "--compile", description: "Just a flag."},
	{name: "debug", singleFlag: "-D", doubleFlag: "--debug", description: "Just a flag."},
	{name: "force", singleFlag: "-F", doubleFlag: "--force", description: "Just a flag."},
	{name: "html", singleFlag: "-H", doubleFlag: "--html", description: "Just a flag."},
	{name: "init", singleFlag: "-I", doubleFlag: "--init", description: "Just a flag."},
	{name: "list", singleFlag: "-L", doubleFlag: "--list", description: "Just a flag."},
	{name: "markdown", singleFlag: "-M", doubleFlag: "--markdown", description: "Just a flag."},
	{name: "open", singleFlag: "-O", doubleFlag: "--open", description: "Just a flag."},
	{name: "preview", singleFlag: "-P", doubleFlag: "--preview", description: "Just a flag."},
	{name: "recursive", singleFlag: "-R", doubleFlag: "--recursive", description: "Just a flag."},
	{name: "status", singleFlag: "-S", doubleFlag: "--status", description: "Just a flag."},
	{name: "version", singleFlag: "-V", doubleFlag: "--version", description: "Just a flag."},
	{name: "watch", singleFlag: "-W", doubleFlag: "--watch", description: "Just a flag."},
];
