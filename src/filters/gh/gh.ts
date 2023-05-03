


export function RepoLink (repoName: string): string {
	return `[\`${repoName}\`](https://github.com/${repoName})`;
}

export const Gh = {
	RepoLink,
};
