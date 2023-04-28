import path from 'path';
import nunjucks from 'nunjucks';
import { RxTemplate } from './rxtemplate';



export class RxEnv {
	homepageTemplatesPath = require.resolve('../../templates/homepage.html');
	templatesPath = path.dirname(this.homepageTemplatesPath);

	env = new nunjucks.Environment(new nunjucks.FileSystemLoader(this.templatesPath));
	homepageTemplate = new RxTemplate(this.env, "homepage.html");
	docpageTemplate = new RxTemplate(this.env, "docpage.html");

	constructor() {
		//
	}
}
