import { SPACES, TAB } from "../constants";



export function sanitizeCodeLine (line: string) : string {
	line = line.trim();
	line = line.slice(1); // remove leading `@`
	return line;
}

export function sanitizeRxLine (line: string) : string {
	line = line.trimEnd();

	let nTabs = 0;
	for (let ch of line) {
		if (ch === TAB) {
			nTabs++;
		} else {
			break;
		}
	}

	line = line.slice(nTabs); // remove all tabs
	while (nTabs > 0) {
		line = SPACES + line;
		nTabs--;
	}

	return line;
}
