import http from 'http';
import { API_PORT, HOSTNAME } from '../constants';

import { RxFile } from "../rxfile";
import { CmdOptionsType } from "./common";



const success = {
	status: "success"
};

export function apiCommand (rxFiles: RxFile[], cmdOptions: CmdOptionsType) {
	const server = http.createServer((req, res) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(success));
	});

	server.listen(API_PORT, HOSTNAME, () => {
		console.log(`API Server running at http://${HOSTNAME}:${API_PORT}/`);
	});
}
