const fs = require('fs');

const readFile = __dirname + '/openingfile.txt';
const writeFile = __dirname + '/copyWrite.txt';

const readStream = fs.createReadStream(readFile);
const writeStream = fs.createWriteStream(writeFile);

readStream.pipe(writeStream);

console.log('Write Completed');

