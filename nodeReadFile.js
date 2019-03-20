const fs = require('fs');

const fileName = __dirname + '/openingfile.txt';

fs.readFile(fileName, (err, data) => {

    if (err) {

        console.log(err);

    }

    console.log(data.toString());

});