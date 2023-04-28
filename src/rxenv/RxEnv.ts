import path from 'path';
import nunjucks from 'nunjucks';


export class RxEnv {
	homepageTemplatesPath = require.resolve('../../templates/homepage.html');
	templatesPath = path.dirname(this.homepageTemplatesPath);

	env = new nunjucks.Environment(new nunjucks.FileSystemLoader(this.templatesPath));
	homepageTemplate = this.env.getTemplate("homepage.html");
	docpageTemplate = this.env.getTemplate("docpage.html");

	constructor() {
		//
	}
}
