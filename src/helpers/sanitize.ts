import { SPACES, TAB } from "../constants";
import { RxFileLine } from "../rxfile";



function getIndentation (n: number) : string {
	let indentation = "";
	while (n-- > 0) {
		indentation += SPACES;
	}
	return indentation;
}

export function indentLine (line: RxFileLine) : string {
	const indentedText = getIndentation(line.indent) + line.text
	return indentedText;
}



export function sanitizeCodeLine (line: RxFileLine) : RxFileLine {
	line.text = line.text.trim();
	line.text = line.text.slice(1); // remove leading `@`
	line.text = line.text.trimStart();
	return line;
}

export function sanitizeRxLine (line: RxFileLine) : RxFileLine {
	let text = line.text.trimEnd();

	let nSpaces = 0;
	for (const ch of text) {
		if (ch === TAB) {
			nSpaces += 4;
		} else if (ch === " ") {
			nSpaces += 1;
		} else {
			break;
		}
	}

	line.text = text.trimStart(); // remove whitespace from the start
	line.indent = Math.floor(nSpaces / 4);
	return line;
}
