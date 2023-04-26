


export function isSingleFlag (arg: string) : boolean {
	return arg[0] === "-" && arg[1] !== "-";
}

export function isDoubleFlag (arg: string) : boolean {
	return arg[0] === "-" && arg[1] === "-" && arg[2] !== "-";
}

export function isTripleFlag (arg: string) : boolean {
	return arg[0] === "-" && arg[1] === "-" && arg[2] === "-" && arg[3] !== "-";
}

export function isNotFlag (arg: string) : boolean {
	return arg[0] !== "-";
}
