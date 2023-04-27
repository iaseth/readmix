import fs from 'fs';
import { helpers } from './helpers';



export function splitFile (inputFilepath: string) : string[] {
	if (!inputFilepath.endsWith(".rx")) {
		return ["", ""];
	}

	const inputText = fs.readFileSync(inputFilepath, {encoding:'utf8'});
	const inputLines = inputText.split("\n");
	const inputLinesWithoutComments = inputLines.filter(helpers.isNotAComment);

	const codeLines = inputLinesWithoutComments.filter(helpers.isCode);
	const codeLinesSanitized = codeLines.map(helpers.sanitizeCodeLine);
	const codeText = codeLinesSanitized.join("\n");

	const contentLines = inputLinesWithoutComments.filter(helpers.isRx);
	const contentLinesSanitized = contentLines.map(helpers.sanitizeRxLine);
	const contentText = contentLinesSanitized.join("\n");

	return [codeText, contentText];
}
