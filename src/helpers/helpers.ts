import { isDoubleFlag, isNotFlag, isSingleFlag, isTripleFlag } from "./args";
import { isCode, isComment, isNotAComment, isRx } from "./comment";
import { directoryExists, fileExists, getFilesInDirectories, getFilesInDirectory, getRxFilesInDirectories, pathDoesNotExist, pathExists } from "./paths";
import { getEntry, splitFile } from "./rx";
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
	isRx,

	sanitizeCodeLine,
	sanitizeRxLine,

	getEntry,
	splitFile,
};
