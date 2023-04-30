import { RxFileLine } from "../rxfile";



export const sugars = {};

export function deSugarize (line: RxFileLine) : RxFileLine {
	const prefix = line.text.split(" ")[0].trim();
	switch (prefix) {
		case "$":
		case "$$":
		case "$$$":
		case "$$$$":
		case "$$$$$":
		case "$$$$$$":
		case "=>":
			line.text = "{{ '" + line.text.slice(3).trim() + `' | CodeBlock | Indent(${line.indent}) }}`
		case "->":
		default:
	}

	return line;
}
