// import yaml from 'js-yaml'; // not working, hence using require
const yaml = require('js-yaml');



export function parseYaml (text: string) : any {
	try {
		const doc = yaml.load(text);
		return doc;
	} catch (error) {
		console.log(error);
	}
	return null;
}
