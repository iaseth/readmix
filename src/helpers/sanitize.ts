import { SPACES, TAB } from "../constants";
import { RxFileLine } from "../rxfile";



export function sanitizeCodeLine (line: RxFileLine) : RxFileLine {
	line.text = line.text.trim();
	line.text = line.text.slice(1); // remove leading `@`
	line.text = line.text.trimStart();
	return line;
}

export function sanitizeRxLine (line: RxFileLine) : RxFileLine {
	let text = line.text.trimEnd();

	let nTabs = 0;
	for (const ch of text) {
		if (ch === TAB) {
			nTabs++;
		} else {
			break;
		}
	}

	text = text.slice(nTabs); // remove all tabs
	while (nTabs > 0) {
		text = SPACES + text;
		nTabs--;
	}

	line.text = text;
	return line;
}
