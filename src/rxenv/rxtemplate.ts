import { Environment, Template } from "nunjucks";



export class RxTemplate {
	readonly env: Environment;
	readonly filepath: string;
	template: Template;

	constructor(env: Environment, filepath: string) {
		this.env = env;
		this.filepath = filepath;
		this.template = this.env.getTemplate(this.filepath);
	}

	render (props: any) {
		return this.template.render(props);
	}
}
