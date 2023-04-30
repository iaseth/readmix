import { CodeBlock } from './code';
import { CodeFile, File } from './files';
import { GithubRepoLink } from './github';
import { Indent } from './indent';
import { NpmPackageLink } from './npm';
import { Print, PrintFiltersTable, PrintFunctionsTable, PrintPropsTable } from './print';
import { Table } from './table';



// shorter aliases for long filters
const NpmLink = NpmPackageLink;
const GithubLink = GithubRepoLink;

export const filters = {
	// P: Print,
	// F: File,
	// T: Table,
	// I: Indent,

	Print,

	PrintPropsTable,
	PrintFunctionsTable,
	PrintFiltersTable,

	File,
	CodeFile,

	Table,

	CodeBlock,
	Indent,

	GithubLink,
	GithubRepoLink,
	NpmLink,
	NpmPackageLink,
};
