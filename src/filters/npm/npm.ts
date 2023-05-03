


function PackageLink (packageName: string): string {
	return `[\`${packageName}\`](https://www.npmjs.com/package/${packageName})`;
}

export const Npm = {
	PackageLink,
};
