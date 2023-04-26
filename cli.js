#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const readmix = require("./dist");
const {helpers} = readmix;



function compileFile (inputFilepath, forceUpdate=false) {
	// console.log(`compileFile: ${inputFilepath}`);
	if (!inputFilepath.endsWith(".rx")) {
		return; // skip files without "rx" extension
	}
	const outputFilepath = inputFilepath.slice(0, -3) + ".md";
	console.log(`Input: ${inputFilepath}`);

	const inputText = fs.readFileSync(inputFilepath, {encoding:'utf8'});
	const inputLines = inputText.split("\n");
	const inputLinesWithoutComments = inputLines.filter(helpers.isNotAComment);

	const codeLines = inputLinesWithoutComments.filter(helpers.isCode);
	const codeLinesSanitized = codeLines.map(helpers.sanitizeCodeLine);
	const codeText = codeLinesSanitized.join("\n");

	const contentLines = inputLinesWithoutComments.filter(helpers.isRx);
	const contentLinesSanitized = contentLines.map(helpers.sanitizeRxLine);
	const contentText = contentLinesSanitized.join("\n");

	const filetext = readmix.renderString(contentText);
	fs.writeFileSync(outputFilepath, filetext);
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
	for (const inputFile of inputFiles) {
		compileFile(inputFile);
	}

	for (const badPath of badPaths) {
		console.log(`Path Not Found: ${badPath}`);
	}
}

main();
