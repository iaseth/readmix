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
	const flags = args.filter(a => a.startsWith("-"));

	const pathArgs = args.filter(a => !a.startsWith("-"));
	for (const pathArg of pathArgs) {
		if (fs.existsSync(pathArg)) {
			const stat = fs.lstatSync(pathArg);
			if (stat.isDirectory()) {
				compileDirectory(pathArg);
			} else if (stat.isFile()) {
				compileFile(pathArg);
			}
		} else {
			console.log(`Path Not Found: ${pathArg}`);
		}
	}
}

main();
