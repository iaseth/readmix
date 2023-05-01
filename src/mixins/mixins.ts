import { extras } from './extras';
import { gh } from './gh';
import { apache2License, bsd2License, bsd3License, iscLicense, mitLicense, msplLicense, zlibLicense } from './licenses';
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

	apache2License,
	bsd2License,
	bsd3License,
	iscLicense,
	mitLicense,
	msplLicense,
	zlibLicense,
};
