import toml from 'toml';



export function parseToml (text: string) : any {
	try {
		const doc = toml.parse(text);
		return doc;
	} catch (error) {
		console.log(error);
	}
	return null;
}
