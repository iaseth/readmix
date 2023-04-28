import fs from 'fs';
import path from 'path';
import { Template } from "nunjucks";
import { RxEnv } from "./rxenv";



export class RxTemplate {
	readonly rxEnv: RxEnv;
	readonly filepath: string;
	readonly fullFilepath: string;
	mtime: Date = new Date();
	template?: Template;

	constructor(rxEnv: RxEnv, filepath: string) {
		this.rxEnv = rxEnv;
		this.filepath = filepath;
		this.fullFilepath = path.join(this.rxEnv.templatesPath, filepath);
		this.loadTemplate();
	}

	loadTemplate () {
		this.mtime = fs.lstatSync(this.fullFilepath).mtime;
		this.template = this.rxEnv.env.getTemplate(this.filepath);
	}

	needsReload () {
		const mtime = fs.lstatSync(this.fullFilepath).mtime;
		if (mtime > this.mtime) {
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
