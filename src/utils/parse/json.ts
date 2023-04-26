import JSON5 from 'json5';



export function parseJson (text: string) : any {
	try {
		const jo = JSON.parse(text);
		return jo;
	} catch (error) {
		const jo = JSON5.parse(text);
		return jo;
	}
}
