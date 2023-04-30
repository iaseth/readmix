import { RxFileLine } from "../rxfile";



export function FatArrow (line: RxFileLine) : RxFileLine {
	// line.text is something like "=> This is some code."
	line.text = "{{ '" + line.text.slice(3).trim() + `' | CodeBlock | Indent(${line.indent}) }}`;
	return line;
}
