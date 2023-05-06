


export function link (path: string, title: string) : string {
	const href = `https://github.com/${path}`;
	title = title || path;
	return `[\`${title}\`](${href})`;
}
