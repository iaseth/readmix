import { isDoubleFlag, isNotFlag, isSingleFlag, isTripleFlag } from "./args";
import { isCode, isComment, isNotAComment, isRx } from "./comment";
import { sanitizeCodeLine, sanitizeRxLine } from "./sanitize";



export const helpers = {
	isSingleFlag,
	isDoubleFlag,
	isTripleFlag,
	isNotFlag,

	isComment,
	isNotAComment,
	isCode,
	isRx,

	sanitizeCodeLine,
	sanitizeRxLine,
};
