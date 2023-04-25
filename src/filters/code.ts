

const SPACES = "    ";

export function CodeBlock (code: string, level=0) : string {
	const rawMd = "```\n" + code + "\n```";
	let indent = "";
	for (let i=0; i<level; i++) {
		indent += SPACES;
	}

	const indentedLines = rawMd.split("\n").map((line, idx) => {
		return idx ? indent + line : line;
	});
	const indentedMd = indentedLines.join("\n")
	return indentedMd;
}
