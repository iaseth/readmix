


function NpmPackageLink (packageName: string): string {
	return `[\`${packageName}\`](https://www.npmjs.com/package/${packageName})`;
}

export const filters = {
	NpmPackageLink
};
