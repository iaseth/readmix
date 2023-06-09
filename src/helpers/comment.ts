import { COMMENT_PREFIXES, SUGAR_PREFIXES } from "../constants";
import { RxFileLine } from "../rxfile";



export function isComment (line: RxFileLine) : boolean {
	const text = line.text.trimStart();
	for (const prefix of COMMENT_PREFIXES) {
		if (text.startsWith(prefix)) {
			return true;
		}
	}
	return false;
}

export function isNotAComment (line: RxFileLine) : boolean {
	return !isComment(line);
}

export function isCode (line: RxFileLine) : boolean {
	return line.text.trimStart().startsWith("@");
}

export function isContent (line: RxFileLine) : boolean {
	return !isCode(line) && !isComment(line);
}

export function isHeading (line: RxFileLine) : boolean {
	if (line.text.startsWith("#")) {
		return true;
	}
	return false;
}

export function isTopLevel (line: RxFileLine) : boolean {
	return (line.indent === 0) ? true : false;
}

export function isSugar (line: RxFileLine) : boolean {
	const text = line.text.trimStart();
	for (const prefix of SUGAR_PREFIXES) {
		if (text.startsWith(prefix)) {
			return true;
		}
	}
	return false;
}
