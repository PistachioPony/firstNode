var http = require('http');
  handler = function (req, res) {
    if (req.url === '/') {
      res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
    }else if (req.url ==='/marketing') {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('You should buy this stuff\n');
    }else {
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('Wrong place wrong time\n');
    }
  }
  server = http.createServer(handler)

server.listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');