import { extras } from './extras';
import { gh } from './gh';
import { licenses } from './licenses';
import { meta } from './meta';
import { npm } from './npm';
import { packagejson } from './packagejson';
import { std } from './std';
import { arrayTable, objectTable, table } from './table';



export const mixins = {
	arrayTable,
	objectTable,
	table,

	...meta,
	...packagejson,
	...licenses,

	...std,
	...extras,

	gh,
	npm,

	// putting most important entries at the last to ensure they are not overwritten
	std,
	extras,
};
