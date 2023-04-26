import fs from 'fs';



export function pathExists (path: string) : boolean {
	return fs.existsSync(path);
}

export function pathDoesNotExist (path: string) : boolean {
	return !pathExists(path);
}
