import { isDoubleFlag, isNotFlag, isSingleFlag, isTripleFlag } from "./args";
import { isCode, isComment, isContent, isHeading, isNotAComment, isSugar } from "./comment";
import { directoryExists, fileExists,
	getFilesInDirectories, getFilesInDirectory,
	getFileMtime,
	getRxFilesInDirectories, pathDoesNotExist,
	pathExists } from "./paths";
import { indentLine, sanitizeCodeLine, sanitizeRxLine } from "./sanitize";



export const helpers = {
	isSingleFlag,
	isDoubleFlag,
	isTripleFlag,
	isNotFlag,

	pathExists,
	pathDoesNotExist,
	fileExists,
	directoryExists,
	getFileMtime,

	getFilesInDirectory,
	getFilesInDirectories,
	getRxFilesInDirectories,

	isComment,
	isNotAComment,
	isCode,
	isContent,
	isHeading,
	isSugar,

	indentLine,
	sanitizeCodeLine,
	sanitizeRxLine,
};
