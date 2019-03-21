const fs = require('fs');
const child_process = require('child_process');

for(let i=0; i<6; i++){

    let workProccess = child_process.exec('node support.js ' + i, (err, stdout, stderr) => {

        if (err) {

            console.log(err);
            console.log(`Error Code: ${err.code}`);
        }

        console.log(`Stdout: ${stdout}`);
        console.log(`Stderr: ${stderr}`);

    });

    workProccess.on('exit', code => console.log(`Exit code ${code}`));

};
