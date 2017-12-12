

//zadanie 13.8
/*var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
res.write(data);
    res.end();
  }
)
});
server.listen(8080);
*/
/*
var http = require('http');
var fs = require('fs');

var server = http.createServer( function(req, res) {
  
  if (req.method === 'GET' && req.url === '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html; charset-utf-8'});
      res.write(data);
      res.end(); 
    } else {
      res.statusCode = 404;
      res.write('<h1>404: Zła ścieżka!</h1>');
      res.end();
    }
  )
  }
});
 server.listen(8080);
*/


 var http = require('http');
 var fs = require('fs');
 
 var server = http.createServer();
 
 server.on('request', function (request, response) {
     response.setHeader("Content-Type", "text/html; charset=utf-8");
     if (request.method === 'GET' && request.url === '/hello') {
      fs.readFile('index.html')
         response.write('<h1>Hello World!</h1>');
             response.end();
     } else {
             response.statusCode = 404;
             response.write('<h1>404: Zła ścieżka!</h1>');
             response.end();
     }
 });
 
 server.listen(8080);

