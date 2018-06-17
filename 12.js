const http = require('http');
const map = require('through2-map');
const port = process.argv[2];

const server = http.createServer((req, res) => {
  if (req.method !== 'POST') {
    res.writeHead(404, { 'content-type': 'text/plain' });
    return res.end('Only POST method is supported');
  }

  req.pipe(map((chunk) => {
    return chunk.toString().toUpperCase();
  })).pipe(res);
});

server.listen(port);
