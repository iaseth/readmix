#!/usr/bin/env node

const fs = require("fs");
const path = require("path");



function main () {
	const [,, inputPath, ...args] = process.argv;
	console.log(`inputPath: ${inputPath}`);
}

main();
