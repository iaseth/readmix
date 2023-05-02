import { tableInternal } from "./tableInternal";



interface ObjectType {
	[key: string]: string
}

export function arrayTable (arr: ObjectType[], headerObject: ObjectType) : string {
	const keys: string[] = Object.keys(headerObject);
	const header: string[] = keys.map(k => headerObject[k]);
	const rows = arr.map(a => keys.map(k => a[k]));
	return tableInternal(rows, header);
}

export function objectTable (obj: ObjectType, header: string[] = ["`Key`", "`Value`"]) : string {
	const rows = Object.keys(obj).map(k => {
		return [k, obj[k]];
	});
	return tableInternal(rows, header);
}

export function table () : string {
	return "";
}
