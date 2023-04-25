#!/usr/bin/env node

const fs = require("fs");
const path = require("path");



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

function compileFile (filepath) {
	// console.log(`compileFile: ${filepath}`);
	if (!filepath.endsWith(".rx")) {
		return; // skip files without "rx" extension
	}
	const outputFilepath = filepath.slice(0, -3) + ".md";
	console.log(`Input: ${filepath}`);

	const filetext = "";
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
