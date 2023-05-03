import { SPACES } from "../../constants";
import { RxFile } from "../../rxfile";



export function tableofcontents (doc: RxFile) {
	const headers = doc.headers;
	const text = headers.map(headerText => {
		const spaceIndex = headerText.indexOf(" ");
		const indentation = [...Array(spaceIndex-1)].map(x => SPACES).join("");
		const title = headerText.slice(spaceIndex).trim();
		const href = title.toLowerCase().split(" ").join("-");
		const lineText = `${indentation}* [${title}](#${href})`;
		return lineText;
	}).join("\n");

	return text;
}
