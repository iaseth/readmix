import http from 'http';
import { API_PORT, HOSTNAME } from '../constants';

import { RxFile } from "../rxfile";
import { CmdOptionsType } from "./common";



const success = {
	status: "success"
};

const HEADERS = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
	'Access-Control-Max-Age': 2592000,
	'Content-Type': 'application/json',
};

export function apiCommand (rxFiles: RxFile[], cmdOptions: CmdOptionsType) {
	const server = http.createServer((req, res) => {
		res.writeHead(200, HEADERS);
		res.end(JSON.stringify(success));
	});

	server.once('error', function(err: NodeJS.ErrnoException) {
		if (err.code === 'EADDRINUSE') {
			console.log(`Port ${API_PORT} is already is use!`);
		} else {
			console.log(`Something bad happened!`);
		}
	});

	server.listen(API_PORT, HOSTNAME, () => {
		console.log(`API Server running at http://${HOSTNAME}:${API_PORT}/`);
	});
}
