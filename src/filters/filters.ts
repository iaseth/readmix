import { CodeFile, File } from './files';
import { GithubRepoLink } from './github';
import { NpmPackageLink } from './npm';
import { Print, PrintFunctionsTable } from './print';



// shorter aliases for long filters
const NpmLink = NpmPackageLink;
const GithubLink = GithubRepoLink;

export const filters = {
	Print,
	PrintFunctionsTable,

	File,
	CodeFile,

	GithubLink,
	GithubRepoLink,
	NpmLink,
	NpmPackageLink,
};
