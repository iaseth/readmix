import { isDoubleFlag, isNotFlag, isSingleFlag, isTripleFlag } from "./args";
import { isCode, isComment, isContent, isNotAComment, isSugar } from "./comment";
import { directoryExists, fileExists, getFilesInDirectories, getFilesInDirectory, getRxFilesInDirectories, pathDoesNotExist, pathExists } from "./paths";
import { sanitizeCodeLine, sanitizeRxLine } from "./sanitize";



export const helpers = {
	isSingleFlag,
	isDoubleFlag,
	isTripleFlag,
	isNotFlag,

	pathExists,
	pathDoesNotExist,
	fileExists,
	directoryExists,

	getFilesInDirectory,
	getFilesInDirectories,
	getRxFilesInDirectories,

	isComment,
	isNotAComment,
	isCode,
	isContent,
	isSugar,

	sanitizeCodeLine,
	sanitizeRxLine,
};
