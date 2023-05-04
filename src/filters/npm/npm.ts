


function PackageLink (packageName: string): string {
	const title = packageName.trim();
	const name = title.toLowerCase();
	return `[\`${title}\`](https://www.npmjs.com/package/${name})`;
}

export const Npm = {
	PackageLink,
};
