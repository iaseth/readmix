import { getDefaultCmdOptions } from "./common";
import { compileCommand } from "./compile";
import { initCommand } from "./init";
import { listCommand } from "./list";
import { previewCommand } from "./preview";
import { watchCommand } from "./watch";



export const commands = {
	getDefaultCmdOptions,

	compileCommand,
	initCommand,
	listCommand,
	previewCommand,
	watchCommand,
};
