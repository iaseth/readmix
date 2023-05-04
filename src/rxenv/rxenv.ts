import path from 'path';
import { RxTemplate } from './rxtemplate';



export class RxEnv {
	homepageTemplatesPath = require.resolve('../../templates/homepage.html');
	templatesPath = path.dirname(this.homepageTemplatesPath);
	staticDirPath = path.join(this.templatesPath, "static");

	homepageTemplate = new RxTemplate(this, "homepage.html");
	docpageTemplate = new RxTemplate(this, "docpage.html");

	constructor () {
		//
	}
}
