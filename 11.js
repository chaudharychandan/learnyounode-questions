const fs = require('fs');
const http = require('http');

const port = process.argv[2];
const fileLocation = process.argv[3];

const server = http.createServer((req, res) => {
  let readStream = fs.createReadStream(fileLocation);
  res.writeHead(200, { 'content-type': 'text/plain' });
  readStream.pipe(res);
});

server.listen(port);
