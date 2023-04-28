import path from 'path';
import nunjucks from 'nunjucks';
import { RxTemplate } from './rxtemplate';



export class RxEnv {
	homepageTemplatesPath = require.resolve('../../templates/homepage.html');
	templatesPath = path.dirname(this.homepageTemplatesPath);

	homepageTemplate = new RxTemplate(this, "homepage.html");
	docpageTemplate = new RxTemplate(this, "docpage.html");

	constructor() {
		//
	}
}
