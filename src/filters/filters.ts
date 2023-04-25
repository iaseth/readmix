import fs from 'fs';
import path from 'path';
import { GithubRepoLink } from './github';
import { NpmPackageLink } from './npm';


const a3 = "```\n";

function File (filepath: string): string {
	if (fs.existsSync(filepath)) {
		const contents = fs.readFileSync(filepath, {encoding:'utf8'});
		return contents;
	} else {
		return `File not found: ${filepath}\n`;
	}
}

function CodeFile (filepath: string): string {
	const contents = `Contents of ${filepath}`;
	return a3 + File(filepath) + a3;
}


// shorter aliases for long filters
const NpmLink = NpmPackageLink;
const GithubLink = GithubRepoLink;

export const filters = {
	File,
	CodeFile,

	GithubLink,
	GithubRepoLink,
	NpmLink,
	NpmPackageLink,
};
