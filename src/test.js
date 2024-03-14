'use strict';

// import

const Path = require('path');
const { unitsDatFileToJsonFile } = require('@aqo/starcraft-dat-units');

// run

start();

// functions

function start() {
	const repoDir = Path.resolve(Path.join(__dirname, '..'));
	const dataDir = Path.join(repoDir, 'data');

	unitsDatFileToJsonFile(
		Path.join(dataDir, 'units.datex'),
		Path.join(dataDir, 'units.txt'),
		Path.join(dataDir, 'units.json'),
	);
}
