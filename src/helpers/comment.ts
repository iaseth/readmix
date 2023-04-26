
const COLONS = "::";
const SLASHES = "//";

export function isComment (text: string) : boolean {
	return text.startsWith(COLONS) || text.startsWith(SLASHES);
}

export function isNotAComment (text: string) : boolean {
	return !isComment(text);
}

export function isCode (text: string) : boolean {
	return text.trimStart().startsWith("@");
}

export function isRx (text: string) : boolean {
	return !isCode(text) && !isCode(text);
}
