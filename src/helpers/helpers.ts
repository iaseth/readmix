import { isCode, isComment, isNotAComment, isRx } from "./comment";
import { sanitizeRxLine } from "./sanitize";



export const helpers = {
	isComment,
	isNotAComment,
	isCode,
	isRx,

	sanitizeRxLine,
};
