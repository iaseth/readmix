import { CodeBlock } from './code';
import { Extras } from './extras';
import { CodeFile, File } from './files';
import { GithubRepoLink } from './gh';
import { Indent } from './indent';
import { NpmPackageLink } from './npm';
import { Print, PrintFiltersTable, PrintFunctionsTable, PrintPropsTable } from './print';
import { STD } from './std';
import { Table } from './table';



// shorter aliases for long filters
const NpmLink = NpmPackageLink;
const GithubLink = GithubRepoLink;

export const filters = {
	// P: Print,
	// F: File,
	// T: Table,
	// I: Indent,

	STD,
	Extras,

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
