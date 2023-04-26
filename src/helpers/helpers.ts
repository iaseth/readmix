import { isCode, isComment, isNotAComment, isRx } from "./comment";
import { sanitizeCodeLine, sanitizeRxLine } from "./sanitize";



export const helpers = {
	isComment,
	isNotAComment,
	isCode,
	isRx,

	sanitizeCodeLine,
	sanitizeRxLine,
};
