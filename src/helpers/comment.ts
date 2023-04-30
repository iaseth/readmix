import { COMMENT_PREFIXES } from "../constants";



export function isComment (text: string) : boolean {
	text = text.trimStart();
	for (const prefix of COMMENT_PREFIXES) {
		if (text.startsWith(prefix)) {
			return true;
		}
	}
	return false;
}

export function isNotAComment (text: string) : boolean {
	return !isComment(text);
}

export function isCode (text: string) : boolean {
	return text.trimStart().startsWith("@");
}

export function isRx (text: string) : boolean {
	return !isCode(text) && !isComment(text);
}
