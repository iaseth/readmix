import { extras } from './extras';
import { gh } from './gh';
import { insertMitLicense } from './licenses';
import { giveCredit } from './meta';
import { npm } from './npm';
import { dependencyTable, devDependencyTable } from './packagejson';
import { rx } from './rx';



export const mixins = {
	rx,
	std: rx,
	extras,
	gh,
	npm,

	giveCredit,

	dependencyTable,
	devDependencyTable,

	insertMitLicense,
};
