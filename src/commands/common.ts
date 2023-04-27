


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
	{name: "compile", singleFlag: "-C", doubleFlag: "--compile", description: "Compile to Markdown."},
	{name: "debug", singleFlag: "-D", doubleFlag: "--debug", description: "Turns debug mode ON."},
	{name: "force", singleFlag: "-F", doubleFlag: "--force", description: "Force update files."},
	{name: "html", singleFlag: "-H", doubleFlag: "--html", description: "Compile to HTML."},
	{name: "init", singleFlag: "-I", doubleFlag: "--init", description: "Initialize readmix in directory, creates rxconfig.json with default options."},
	{name: "list", singleFlag: "-L", doubleFlag: "--list", description: "List all input files."},
	{name: "markdown", singleFlag: "-M", doubleFlag: "--markdown", description: "Compile to Markdown."},
	{name: "open", singleFlag: "-O", doubleFlag: "--open", description: "Open live preview in default web browser."},
	{name: "preview", singleFlag: "-P", doubleFlag: "--preview", description: "Run a live preview server."},
	{name: "recursive", singleFlag: "-R", doubleFlag: "--recursive", description: "Select subdirectories recursively."},
	{name: "status", singleFlag: "-S", doubleFlag: "--status", description: "Print status."},
	{name: "version", singleFlag: "-V", doubleFlag: "--version", description: "Print version."},
	{name: "watch", singleFlag: "-W", doubleFlag: "--watch", description: "Watch input files for changes."},
];
