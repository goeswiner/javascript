const http = require("http");

http.createServer(function (req, res){
    res.end('Hello world!');
}).listen(1919);

console.log('Server is on!');