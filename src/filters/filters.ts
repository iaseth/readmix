import { CodeFile, File } from './files';
import { GithubRepoLink } from './github';
import { NpmPackageLink } from './npm';
import { Print } from './print';



// shorter aliases for long filters
const NpmLink = NpmPackageLink;
const GithubLink = GithubRepoLink;

export const filters = {
	File,
	CodeFile,
	Print,

	GithubLink,
	GithubRepoLink,
	NpmLink,
	NpmPackageLink,
};
