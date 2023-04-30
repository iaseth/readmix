import { RxFileLine } from "../rxfile";
import { Dollars } from "./dollars";
import { FatArrow } from "./fatarrow";
import { ThinArrow } from "./thinarrow";



export const sugars = {
	Dollars,
	FatArrow,
	ThinArrow,
};

export function deSugarize (line: RxFileLine) : RxFileLine {
	if (line.text.startsWith("$")) {
		return Dollars(line);
	} else if (line.text.startsWith("=>")) {
		return FatArrow(line);
	} else if (line.text.startsWith("->")) {
		return ThinArrow(line);
	}
	return line;
}
