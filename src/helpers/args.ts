


function getLeadingDashCount (arg: string) : number {
	let count = 0;
	for (const ch of arg) {
		if (ch === "-") {
			count++;
		} else {
			break;
		}
	}

	return count;
}

export function isSingleFlag (arg: string) : boolean {
	return arg.length >= 2 && getLeadingDashCount(arg) === 1;
}

export function isDoubleFlag (arg: string) : boolean {
	return arg.length >= 3 && getLeadingDashCount(arg) === 2;
}

export function isTripleFlag (arg: string) : boolean {
	return arg.length >= 4 && getLeadingDashCount(arg) === 3;
}

export function isNotFlag (arg: string) : boolean {
	return arg[0] !== "-";
}
