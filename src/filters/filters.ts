import fs from 'fs';
import path from 'path';


const a3 = "```\n";

function GithubRepoLink (repoName: string): string {
	return `[\`${repoName}\`](https://github.com/${repoName})`;
}

function NpmPackageLink (packageName: string): string {
	return `[\`${packageName}\`](https://www.npmjs.com/package/${packageName})`;
}

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
