import http from 'http';

import { EntryType } from "../helpers/rx";
import { CmdOptionsType } from "./common";

const hostname = '127.0.0.1';
const port = 1996;

export function previewCommand (entries: EntryType[], cmdOptions: CmdOptionsType) {
	const server = http.createServer((req, res) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		res.end('Hello World');
	});

	server.listen(port, hostname, () => {
		console.log(`Server running at http://${hostname}:${port}/`);
	});
}
