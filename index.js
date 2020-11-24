const http = require('http');
const url = require('url');
const server = http.createServer((req, res) => {
  // console.log(req.url)
  res.end('Hello' + req.url); 
});

server.listen(server.address().port,server.address(), () => {
  console.log('listening at http://localhost:8000/');
});
