import path from 'path';
import nunjucks from 'nunjucks';
import { RxTemplate } from './rxtemplate';



export class RxEnv {
	homepageTemplatesPath = require.resolve('../../templates/homepage.html');
	templatesPath = path.dirname(this.homepageTemplatesPath);

	env = new nunjucks.Environment(new nunjucks.FileSystemLoader(this.templatesPath, {watch: true}));
	homepageTemplate = new RxTemplate(this, "homepage.html");
	docpageTemplate = new RxTemplate(this, "docpage.html");

	constructor() {
		//
	}
}
