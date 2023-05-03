import { extras } from './extras';
import { gh } from './gh';
import { git } from './git';
import { licenses } from './licenses';
import { meta } from './meta';
import { npm } from './npm';
import { std } from './std';
import { arrayTable, objectTable, table } from './table';



export const mixins = {
	arrayTable,
	objectTable,
	table,

	...meta,
	...licenses,

	...std,
	...extras,

	gh,   // GitHub mixins
	git,  // git mixins
	npm,  // npm/node mixins

	// putting most important entries at the last to ensure they are not overwritten
	std,
	extras,
};
