


export function RepoLink (repoName: string): string {
	const title = repoName.trim();
	const name = title.toLowerCase();
	return `[\`${title}\`](https://github.com/${name})`;
}

export const Gh = {
	RepoLink,
};
