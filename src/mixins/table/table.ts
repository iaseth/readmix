import { tableInternal } from "./tableInternal";



interface ObjectType {
	[key: string]: string
}

export function arrayTable (arr: ObjectType[]) : string {
	return "";
}

export function objectTable (obj: ObjectType, header: string[] = ["Key", "Value"]) : string {
	const rows = Object.keys(obj).map(k => {
		const c1 = "`" + k + "`";
		const c2 = "`" + obj[k] + "`";
		return [c1, c2];
	});
	return tableInternal(rows, header);
}

export function table () : string {
	return "";
}
