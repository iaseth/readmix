



export function CodeBlock (code: string) : string {
	const rawMd = "```\n" + code + "\n```";
	return rawMd;
}
