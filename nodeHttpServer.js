const http = require('http');

http.createServer((req,res) =>{

    res.setHeader('Content_Type', 'text/html');
    res.write('<h1>Server Running At Port 3001</h1>');
    res.end();

}).listen(3001);