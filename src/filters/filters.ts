import { CodeBlock } from './code';
import { Extras } from './extras';
import { CodeFile, File } from './files';
import { Gh } from './gh';
import { Git } from './git';
import { Indent } from './indent';
import { Meta } from './meta';
import { Npm } from './npm';
import { Print, PrintFiltersTable, PrintFunctionsTable, PrintPropsTable } from './print';
import { Std } from './std';
import { Table } from './table';



// shorter aliases for long filters
const NpmLink = Npm.PackageLink;
const GithubLink = Gh.RepoLink;

export const filters = {
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
	NpmLink,

	Gh,
	Git,
	Meta,
	Npm,

	// putting most important entries at the last to ensure they are not overwritten
	Std,
	Extras,
};
