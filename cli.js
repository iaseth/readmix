#!/usr/bin/env node
const readmix = require("./dist");
const { commands, helpers } = readmix;



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

	const commandFlags = readmix.flags.filter(flag => flag.isCommand);
	const trueCommandFlags = commandFlags.filter(flag => cmdOptions[flag.name] === true);
	if (trueCommandFlags.length === 0) {
		// No command flags were specified
		console.log(`No commands to run!`);
		console.log(`\tYou must supply exactly 1 of the following flags:`);
		commandFlags.forEach((c, i) => console.log(`\t\tcommand #${i+1}: ${c.doubleFlag.padEnd(12)} => ${c.description}`));
		return;
	} else if (trueCommandFlags.length > 1) {
		// Multiple command flags were specified
		console.log(`Multiple commands cannot be run at the same time!`);
		trueCommandFlags.forEach((c, i) => console.log(`\tcommand #${i+1}: ${c.doubleFlag.padEnd(12)} => ${c.description}`));
		return;
	}

	const pathArgs = args.filter(helpers.isNotFlag);
	if (pathArgs.length === 0) {
		pathArgs.push(".");
	}

	const goodPaths = pathArgs.filter(helpers.pathExists);
	const rxFiles = helpers.getRxFilesInDirectories(goodPaths, cmdOptions.recursive);

	if (cmdOptions.api) {
		commands.apiCommand(rxFiles, cmdOptions);
	} else if (cmdOptions.compile) {
		commands.compileCommand(rxFiles, cmdOptions);
	} else if (cmdOptions.init) {
		commands.initCommand(rxFiles, cmdOptions);
	} else if (cmdOptions.list) {
		commands.listCommand(rxFiles, cmdOptions);
	} else if (cmdOptions.preview || cmdOptions.open) {
		// open will run preview and then open it in the browser
		commands.previewCommand(rxFiles, cmdOptions);
	} else if (cmdOptions.version) {
		commands.versionCommand(rxFiles, cmdOptions);
	} else if (cmdOptions.watch) {
		commands.watchCommand(rxFiles, cmdOptions);
	}

	const badPaths = pathArgs.filter(helpers.pathDoesNotExist);
	for (const badPath of badPaths) {
		console.log(`Path Not Found: '${badPath}'`);
	}
}

main();
