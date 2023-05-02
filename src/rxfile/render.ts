import nunjucks from 'nunjucks';

import { Readmix } from '../readmix';
import { filters } from '../filters';
import { mixins } from '../mixins';
import { utils } from '../utils';
import { RxFile } from './rxfile';


const env = nunjucks.configure({ autoescape: false });
Object.keys(filters).forEach((filterName: string) => {
	const filter = (filters as any)[filterName];
	env.addFilter(filterName, filter);
});

export function renderString (doc: RxFile) : string {
	const inputText = doc.contentText;
	const outputText = env.renderString(inputText, {
		...Readmix,   // makes all properties of Readmix globally available in template
		...mixins,    // makes all mixins globally available in template
		...utils,     // makes all utils globally available in template
		Rx: Readmix,  // shortcut alias for Readmix
		Readmix,
		doc,
	});
	return outputText;
}
