const fs = require('fs');

let readStream = fs.createReadStream('./openingfile.txt');

readStream.on('open', () => {

    console.log('The file is opend');
    
})