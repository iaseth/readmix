import { extras } from './extras';
import { gh } from './gh';
import { apache2License, bsd2License, bsd3License, cclLicense, epl1License, epl2License, gnuGplLicense, gnuLgplLicense, iscLicense, mitLicense, mplLicense, msplLicense, zlibLicense } from './licenses';
import { giveCredit } from './meta';
import { npm } from './npm';
import { dependencyTable, devDependencyTable } from './packagejson';
import { std } from './std';
import { arrayTable, objectTable, table } from './table';



export const mixins = {
	std,
	extras,
	gh,
	npm,

	giveCredit,

	dependencyTable,
	devDependencyTable,

	arrayTable,
	objectTable,
	table,

	apache2License,
	bsd2License,
	bsd3License,
	cclLicense,
	epl1License,
	epl2License,
	gnuGplLicense,
	gnuLgplLicense,
	iscLicense,
	mitLicense,
	mplLicense,
	msplLicense,
	zlibLicense,
};
