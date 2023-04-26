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

	const cmdOptions = commands.getDefaultCmdOptions();

	readmix.flags.forEach(flag => {
		if (singleFlags.includes(flag.singleFlag) || doubleFlags.includes(flag.doubleFlag)) {
			cmdOptions[flag.name] = true;
		}
	});

	const pathArgs = args.filter(helpers.isNotFlag);
	const goodPaths = pathArgs.filter(helpers.pathExists);
	const badPaths = pathArgs.filter(helpers.pathDoesNotExist);

	const inputFiles = helpers.getRxFilesInDirectories(goodPaths, cmdOptions.recursive);
	const entries = inputFiles.map(helpers.getEntry);

	if (cmdOptions.compile) {
		commands.compileCommand(entries, cmdOptions);
	} else if (cmdOptions.init) {
		commands.initCommand(entries, cmdOptions);
	} else if (cmdOptions.list) {
		commands.listCommand(entries, cmdOptions);
	} else if (cmdOptions.preview || cmdOptions.open) {
		// open will run preview and then open it in the browser
		commands.previewCommand(entries, cmdOptions);
	} else if (cmdOptions.version) {
		commands.versionCommand(entries, cmdOptions);
	} else if (cmdOptions.watch) {
		commands.watchCommand(entries, cmdOptions);
	} else {
		entries.forEach(compileEntry);
	}

	for (const badPath of badPaths) {
		console.log(`Path Not Found: '${badPath}'`);
	}
}

main();
