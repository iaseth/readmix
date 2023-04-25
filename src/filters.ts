


function GithubRepoLink (repoName: string): string {
	return `[\`${repoName}\`](https://github.com/${repoName})`;
}

function NpmPackageLink (packageName: string): string {
	return `[\`${packageName}\`](https://www.npmjs.com/package/${packageName})`;
}


// shorter aliases for long filters
const NpmLink = NpmPackageLink;
const GithubLink = GithubRepoLink;

export const filters = {
	GithubLink,
	GithubRepoLink,
	NpmLink,
	NpmPackageLink,
};
