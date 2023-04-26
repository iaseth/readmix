
const COLONS = "::";
const SLASHES = "//";

export function isComment (text: string) : boolean {
	return text.startsWith(COLONS) || text.startsWith(SLASHES);
}

export function isNotAComment (text: string) : boolean {
	return !isComment(text);
}
