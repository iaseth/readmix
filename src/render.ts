import nunjucks from 'nunjucks';

import { Readmix } from './readmix';
import { filters } from './filters';
import { utils } from './utils';


const env = new nunjucks.Environment();
Object.keys(filters).forEach((filterName: string) => {
	const filter = (filters as any)[filterName];
	env.addFilter(filterName, filter);
});

export function renderString (inputText: string) : string {
	const outputText = env.renderString(inputText, {
		...Readmix, // makes all properties of Readmix globally available in template
		...utils, // makes all utils globally available in template
		Rx: Readmix, // shortcut alias for Readmix
		Readmix,
	});
	return outputText;
}
