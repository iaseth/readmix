#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const readmix = require("./dist");



function compileDirectory (dirpath, recursive=false) {
	// console.log(`compileDirectory: ${dirpath}`);
	const entries = fs.readdirSync(dirpath);
	for (const entry of entries) {
		if (entry.startsWith(".")) {
			continue; // skip hidden files/dirs
		}

		const fullpath = path.join(dirpath, entry);
		const stat = fs.lstatSync(fullpath);
		if (stat.isDirectory() && recursive) {
			compileDirectory(fullpath, recursive);
		} else if (stat.isFile()) {
			compileFile(fullpath);
		}
	}
}

function compileFile (inputFilepath, forceUpdate=false) {
	// console.log(`compileFile: ${inputFilepath}`);
	if (!inputFilepath.endsWith(".rx")) {
		return; // skip files without "rx" extension
	}
	const outputFilepath = inputFilepath.slice(0, -3) + ".md";
	console.log(`Input: ${inputFilepath}`);

	const inputText = fs.readFileSync(inputFilepath, {encoding:'utf8'});
	const inputLines = inputText.split("\n");
	const inputLinesWithoutComments = inputLines.filter(readmix.helpers.isNotAComment);

	const codeLines = inputLinesWithoutComments.filter(readmix.helpers.isCode);
	const codeLinesSanitized = codeLines.map(readmix.helpers.sanitizeCodeLine);
	const codeText = codeLinesSanitized.join("\n");

	const contentLines = inputLinesWithoutComments.filter(readmix.helpers.isRx);
	const contentLinesSanitized = contentLines.map(readmix.helpers.sanitizeRxLine);
	const contentText = contentLinesSanitized.join("\n");

	const filetext = readmix.renderString(contentText);
	fs.writeFileSync(outputFilepath, filetext);
	console.log(`\tsaved: ${outputFilepath}`);
}

function main () {
	const [,, ...args] = process.argv;
	const singleFlags = args.filter(readmix.helpers.isSingleFlag);
	const doubleFlags = args.filter(readmix.helpers.isDoubleFlag);

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

	const pathArgs = args.filter(readmix.helpers.isNotFlag);
	const goodPaths = pathArgs.filter(readmix.helpers.pathExists);
	const badPaths = pathArgs.filter(readmix.helpers.pathDoesNotExist);

	for (const goodPath of goodPaths) {
		const stat = fs.lstatSync(goodPath);
		if (stat.isDirectory()) {
			compileDirectory(goodPath);
		} else if (stat.isFile()) {
			compileFile(goodPath);
		}
	}

	for (const badPath of badPaths) {
		console.log(`Path Not Found: ${badPath}`);
	}
}

main();
