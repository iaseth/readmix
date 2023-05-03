import { Extras } from './extras';
import { Gh } from './gh';
import { Git } from './git';
import { Meta } from './meta';
import { Npm } from './npm';
import { Std } from './std';
import { Table } from './table';



// shorter aliases for long filters
const NpmLink = Npm.PackageLink;
const GithubLink = Gh.RepoLink;

export const filters = {
	Table,

	...Std,

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
