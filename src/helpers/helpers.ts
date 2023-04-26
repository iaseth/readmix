import { isDoubleFlag, isNotFlag, isSingleFlag, isTripleFlag } from "./args";
import { isCode, isComment, isNotAComment, isRx } from "./comment";
import { getFilesInDirectories, getFilesInDirectory, pathDoesNotExist, pathExists } from "./paths";
import { sanitizeCodeLine, sanitizeRxLine } from "./sanitize";



export const helpers = {
	isSingleFlag,
	isDoubleFlag,
	isTripleFlag,
	isNotFlag,

	pathExists,
	pathDoesNotExist,
	getFilesInDirectory,
	getFilesInDirectories,

	isComment,
	isNotAComment,
	isCode,
	isRx,

	sanitizeCodeLine,
	sanitizeRxLine,
};
