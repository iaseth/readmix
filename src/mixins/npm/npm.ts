import { dependencyTable, devDependencyTable, packageDetails } from "./packagejson";



function link (name: string, title: string): string {
	title = title || name;
	const packageName = name.toLowerCase();
	return `[\`${title}\`](https://www.npmjs.com/package/${packageName})`;
}

export const npm = {
	link,

	packageDetails,
	dependencyTable,
	devDependencyTable,
};
