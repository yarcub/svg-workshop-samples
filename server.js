var colors = require('colors');
var static = require('node-static');
var http = require('http');

var file = new(static.Server)();

http.createServer(function (req, res) {
  file.serve(req, res);
}).listen(8000);

console.log("A servir em http://localhost:8000".green);
console.log("CTRL+C para parar o processo".green);