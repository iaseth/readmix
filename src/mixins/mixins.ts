import { insertMitLicense } from './licenses';
import { giveCredit } from './meta';
import { dependencyTable, devDependencyTable } from './packagejson';



export const mixins = {
	giveCredit,

	dependencyTable,
	devDependencyTable,

	insertMitLicense,
};
