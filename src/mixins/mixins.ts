import { extras } from './extras';
import { gh } from './gh';
import { licenses } from './licenses';
import { meta } from './meta';
import { npm } from './npm';
import { packagejson } from './packagejson';
import { std } from './std';
import { arrayTable, objectTable, table } from './table';



export const mixins = {
	std,
	extras,

	...std,
	...extras,

	gh,
	npm,

	arrayTable,
	objectTable,
	table,

	...meta,
	...packagejson,
	...licenses,
};
