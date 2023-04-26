import { insertMitLicense } from './licenses';
import { giveCredit } from './meta';
import { dependencyTable, devDependencyTable } from './packagejson';
import { parse } from './parse';



export const mixins = {
	giveCredit,
	parse,

	dependencyTable,
	devDependencyTable,

	insertMitLicense,
};
