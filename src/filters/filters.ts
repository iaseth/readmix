import { CodeFile, File } from './files';
import { GithubRepoLink } from './github';
import { NpmPackageLink } from './npm';



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
