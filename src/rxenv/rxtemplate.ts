import fs from 'fs';
import path from 'path';
import nunjucks from "nunjucks";
import { RxEnv } from "./rxenv";



export class RxTemplate {
	readonly rxEnv: RxEnv;
	readonly filepath: string;
	readonly fullFilepath: string;
	readonly baseFilepath: string;
	mtime: Date = new Date();
	template?: nunjucks.Template;

	constructor (rxEnv: RxEnv, filepath: string) {
		this.rxEnv = rxEnv;
		this.filepath = filepath;
		this.fullFilepath = path.join(this.rxEnv.templatesPath, filepath);
		this.baseFilepath = path.join(this.rxEnv.templatesPath, "base.html");
		this.loadTemplate();
	}

	loadTemplate () {
		const env = new nunjucks.Environment(new nunjucks.FileSystemLoader(this.rxEnv.templatesPath));
		this.mtime = fs.lstatSync(this.fullFilepath).mtime;
		this.template = env.getTemplate(this.filepath);
	}

	needsReload () {
		const mtime = fs.lstatSync(this.fullFilepath).mtime;
		if (mtime > this.mtime) {
			return true;
		}

		const baseMtime = fs.lstatSync(this.baseFilepath).mtime;
		if (baseMtime > this.mtime) {
			return true;
		}

		return false;
	}

	refresh () {
		if (this.needsReload()) {
			this.loadTemplate();
		}
		return this;
	}

	render (props: any) {
		if (this.template) {
			return this.template.render(props);
		}
		return `Template NOT Found: ${this.filepath}`;
	}
}
