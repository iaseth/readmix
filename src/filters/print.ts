


export function Print (obj: any) : string {
	const jsonString = JSON.stringify(obj, null, "\t");
	return "```\n" + jsonString + "\n```";
}
