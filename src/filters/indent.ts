


const SPACES = "    ";

function getIndentation (level: number) {
	let indentation = "";
	for (let i=0; i<level; i++) {
		indentation += SPACES;
	}
	return indentation;
}

export function Indent (text: string, level=0) : string {
	const indentation = getIndentation(level);

	const indentedLines = text.split("\n").map((line, idx) => {
		return idx ? indentation + line : line;
	});
	const indentedText = indentedLines.join("\n")
	return indentedText;
}
