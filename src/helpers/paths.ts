import fs from 'fs';
import path from 'path';



export function pathExists (pathArg: string) : boolean {
	return fs.existsSync(pathArg);
}

export function pathDoesNotExist (pathArg: string) : boolean {
	return !pathExists(pathArg);
}

export function getFilesInDirectory (dirpath: string, recursive=false) : string[] {
	if (pathDoesNotExist(dirpath)) {
		return [];
	}

	const stat = fs.lstatSync(dirpath);
	if (!stat.isDirectory()) {
		return [];
	}

	let files: string[] = [];
	const entries = fs.readdirSync(dirpath);
	for (const entry of entries) {
		if (entry.startsWith(".")) {
			continue; // skip hidden files/dirs
		}

		const fullpath = path.join(dirpath, entry);
		const stat = fs.lstatSync(fullpath);
		if (stat.isDirectory() && recursive) {
			const moreFiles = getFilesInDirectory(fullpath);
			files = files.concat(moreFiles);
		} else if (stat.isFile()) {
			files.push(fullpath);
		}
	}

	return files;
}

export function getFilesInDirectories (dirpaths: string[], recursive=false) : string[] {
	let files: string[] = [];
	for (let dirpath of dirpaths) {
		const moreFiles = getFilesInDirectory(dirpath, recursive);
		files = files.concat(moreFiles);
	}
	return files;
}
