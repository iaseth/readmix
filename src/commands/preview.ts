import fs from 'fs';
import path from 'path';
import http from 'http';

import { CmdOptionsType } from "./common";
import { RxFile } from '../rxfile';
import { rxEnv } from '../rxenv';
import { HOSTNAME, PREVIEW_PORT } from '../constants';



export function previewCommand (entries: RxFile[], cmdOptions: CmdOptionsType) {
	const server = http.createServer((req, res) => {
		res.statusCode = 200;

		const { url } = req;
		if (url?.startsWith("/static/")) {
			const staticFilepath = url.slice(8);
			const fullpath = path.join(rxEnv.staticDirPath, staticFilepath);
			try {
				res.end(fs.readFileSync(fullpath, {encoding: "utf-8"}));
			} catch (error) {
				res.end(`Error 404: "${fullpath}"`);
			}
		} else if (url?.startsWith("/rx/")) {
			const documentPath = url.slice(4);
			const entry = entries.find(x => x.basepath === documentPath);
			if (entry) {
				const text = rxEnv.docpageTemplate.refresh().render({entries, entry});
				res.setHeader('Content-Type', 'text/html');
				res.end(text);
			} else {
				res.setHeader('Content-Type', 'text/html');
				res.end(`Error 404: "${documentPath}"`);
			}
		} else {
			const text = rxEnv.homepageTemplate.refresh().render({entries});
			res.setHeader('Content-Type', 'text/html');
			res.end(text);
		}
	});

	server.once('error', function(err: NodeJS.ErrnoException) {
		if (err.code === 'EADDRINUSE') {
			console.log(`Port ${PREVIEW_PORT} is already is use!`);
		} else {
			console.log(`Something bad happened!`);
		}
	});

	server.listen(PREVIEW_PORT, HOSTNAME, () => {
		console.log(`Server running at http://${HOSTNAME}:${PREVIEW_PORT}/`);
	});
}
