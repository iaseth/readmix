import express from 'express';
import cors from 'cors';

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
	const app = express();
	app.use(cors());
	app.get("/", (req, res) => {
		res.json(success);
	});

	const server = app.listen(API_PORT);
	if (server) {
		console.log(`Server running at http://${HOSTNAME}:${API_PORT}/`);
	}

	server.once('error', function(err: NodeJS.ErrnoException) {
		if (err.code === 'EADDRINUSE') {
			console.log(`Port ${API_PORT} is already is use!`);
		} else {
			console.log(`Something bad happened!`);
		}
	});
}
