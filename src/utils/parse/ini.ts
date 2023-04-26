const ini = require('ini');



export function parseIni (text: string) : any {
	try {
		const doc = ini.parse(text);
		return doc;
	} catch (error) {
		console.log(error);
	}
	return null;
}
