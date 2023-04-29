


export interface CmdOptionsType {
	api: boolean,            // Run the Readmix JSON API
	compile: boolean,        // compile all files
	debug: boolean,          // debug mode on/off
	force: boolean,          // force update even if output file exists and is newer than input file
	html: boolean,           // HTML mode on/off
	init: boolean,           // initialize Readmix in current directory, create a rxconfig.json
	list: boolean,           // just list all the input files
	markdown: boolean,       // MarkDown mode on/off
	open: boolean,           // open the preview page default web browser
	preview: boolean,        // run a local server for previewing output in browser
	recursive: boolean,      // recurse into sub-directories
	status: boolean,         // print update status of all files
	version: boolean,        // print Readmix version
	watch: boolean,          // watch files for changes
	experimental: boolean,   // experimental mode on/off
	zen: boolean,            // zen mode on/off
}

export function getDefaultCmdOptions () : CmdOptionsType {
	const options: CmdOptionsType = {
		api: false,
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
		experimental: false,
		zen: false,
	};
	return options;
}

export interface FlagType {
	isCommand: boolean,
	name: string,
	singleFlag: string,
	doubleFlag: string,
	description: string
}

export const flags: FlagType[] = [
	{isCommand: true, name: "api", singleFlag: "-A", doubleFlag: "--api", description: "Run the Readmix JSON API."},
	{isCommand: true, name: "compile", singleFlag: "-C", doubleFlag: "--compile", description: "Compile to Markdown."},
	{isCommand: false, name: "debug", singleFlag: "-D", doubleFlag: "--debug", description: "Turns debug mode ON."},
	{isCommand: false, name: "force", singleFlag: "-F", doubleFlag: "--force", description: "Force update files."},
	{isCommand: false, name: "html", singleFlag: "-H", doubleFlag: "--html", description: "Compile to HTML."},
	{isCommand: true, name: "init", singleFlag: "-I", doubleFlag: "--init", description: "Initialize readmix in directory, creates rxconfig.json with default options."},
	{isCommand: true, name: "list", singleFlag: "-L", doubleFlag: "--list", description: "List all input files."},
	{isCommand: false, name: "markdown", singleFlag: "-M", doubleFlag: "--markdown", description: "Compile to Markdown."},
	{isCommand: false, name: "open", singleFlag: "-O", doubleFlag: "--open", description: "Open live preview in default web browser."},
	{isCommand: true, name: "preview", singleFlag: "-P", doubleFlag: "--preview", description: "Run a live preview server."},
	{isCommand: false, name: "recursive", singleFlag: "-R", doubleFlag: "--recursive", description: "Select subdirectories recursively."},
	{isCommand: true, name: "status", singleFlag: "-S", doubleFlag: "--status", description: "Print status."},
	{isCommand: true, name: "version", singleFlag: "-V", doubleFlag: "--version", description: "Print version."},
	{isCommand: true, name: "watch", singleFlag: "-W", doubleFlag: "--watch", description: "Watch input files for changes."},
	{isCommand: false, name: "experimental", singleFlag: "-X", doubleFlag: "--experimental", description: "Turns experimental mode ON."},
	{isCommand: false, name: "zen", singleFlag: "-Z", doubleFlag: "--zen", description: "Turns zen mode ON."},
];
