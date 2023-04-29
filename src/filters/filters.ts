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
	Print,
	P: Print,

	PrintPropsTable,
	PrintFunctionsTable,
	PrintFiltersTable,

	File,
	F: File,
	CodeFile,

	Table,
	T: Table,

	CodeBlock,
	Indent,
	I: Indent,

	GithubLink,
	GithubRepoLink,
	NpmLink,
	NpmPackageLink,
};
