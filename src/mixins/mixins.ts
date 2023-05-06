import { extras } from './extras';
import { gh } from './gh';
import { git } from './git';
import { licenses } from './licenses';
import { meta } from './meta';
import { npm } from './npm';
import { std } from './std';
import { svg } from './svg';
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

	svg,  // SVG mixins

	// putting most important entries at the last to ensure they are not overwritten
	std,       // readmix standard mixins library
	extras,    // readmix extras mixins library
};
