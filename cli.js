#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const readmix = require("./dist");
const {commands, helpers} = readmix;



function compileEntry (entry, forceUpdate=false) {
	const {inputFilepath, outputFilepath} = entry;

	console.log(`Input: ${inputFilepath}`);
	const [codeText, contentText] = helpers.splitFile(inputFilepath);

	const outputFileText = readmix.renderString(contentText);
	fs.writeFileSync(outputFilepath, outputFileText);
	console.log(`\tsaved: ${outputFilepath}`);
}

function main () {
	const [,, ...args] = process.argv;
	const singleFlags = args.filter(helpers.isSingleFlag);
	const doubleFlags = args.filter(helpers.isDoubleFlag);

	const cmdOptions = {
		force: false, // force update even if output file exists and is newer than input file
		list: false, // just list all the input files
		open: false, // open the preview page default web browser
		preview: false, // run a local server for previewing output in browser
		recursive: false, // recurse into sub-directories
		status: false, // print update status of all files
		watch: false, // watch files for changes
	};

	cmdOptions.force = singleFlags.includes("-F") || doubleFlags.includes("--force");
	cmdOptions.list = singleFlags.includes("-L") || doubleFlags.includes("--list");
	cmdOptions.open = singleFlags.includes("-O") || doubleFlags.includes("--open");
	cmdOptions.preview = singleFlags.includes("-P") || doubleFlags.includes("--preview");
	cmdOptions.recursive = singleFlags.includes("-R") || doubleFlags.includes("--recursive");
	cmdOptions.status = singleFlags.includes("-S") || doubleFlags.includes("--status");
	cmdOptions.watch = singleFlags.includes("-W") || doubleFlags.includes("--watch");

	const pathArgs = args.filter(helpers.isNotFlag);
	const goodPaths = pathArgs.filter(helpers.pathExists);
	const badPaths = pathArgs.filter(helpers.pathDoesNotExist);

	const inputFiles = helpers.getRxFilesInDirectories(goodPaths, cmdOptions.recursive);
	const entries = inputFiles.map(helpers.getEntry);

	if (cmdOptions.list) {
		commands.listCommand(entries);
	} else if (cmdOptions.preview) {
		commands.previewCommand(entries);
	} else if (cmdOptions.watch) {
		commands.watchCommand(entries);
	} else {
		commands.compileCommand(entries);
		for (const entry of entries) {
			compileEntry(entry);
		}
	}

	for (const badPath of badPaths) {
		console.log(`Path Not Found: ${badPath}`);
	}
}

main();
