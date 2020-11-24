const http = require('http');
const url = require('url');
const server = http.createServer((req, res) => {
  // console.log(req.url)
  res.end('Hello' + req.url); 
});

server.listen(8000, '127.0.0.1', () => {
  console.log('listening at http://localhost:8000/');
});
