


export function sanitizeRxLine (line: string) : string {
	line = line.trimEnd();
	let nTabs = 0;
	for (let ch of line) {
		if (ch === "\t") {
			nTabs++;
		} else {
			break;
		}
	}

	line = line.slice(nTabs);
	while (nTabs > 0) {
		line = "    " + line;
		nTabs--;
	}

	return line;
}
