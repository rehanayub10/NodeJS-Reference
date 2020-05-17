//Serving Static Files

// const http = require('http');
// const fs = require('fs');
// http.createServer((req,res) => {
//     const readStream = fs.createReadStream('./textfiles/index.html');
//     res.writeHead(200,{'Content-type': 'text/html'});
//     readStream.pipe(res);
// }).listen(3000); //for an html file

// http.createServer((req,res) => {
//     const readStream = fs.createReadStream('./textfiles/example.json');
//     res.writeHead(200,{'Content-type': 'application/json'});
//     readStream.pipe(res);
// }).listen(3000); //for a JSON file