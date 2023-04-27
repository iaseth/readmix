import { getDefaultCmdOptions } from "./common";
import { compileCommand } from "./compile";
import { htmlCommand } from "./html";
import { initCommand } from "./init";
import { listCommand } from "./list";
import { previewCommand } from "./preview";
import { versionCommand } from "./version";
import { watchCommand } from "./watch";



export const commands = {
	getDefaultCmdOptions,

	compileCommand,
	htmlCommand,
	initCommand,
	listCommand,
	previewCommand,
	versionCommand,
	watchCommand,
};
