const http = require('http');
const url = require('url');
const port = process.argv[2];

const server = http.createServer((req, res) => {
  if (req.method !== 'GET') {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end('Only GET request is supported.');
  }

  const { query: { iso }, pathname } = url.parse(req.url, true);
  const date = new Date(iso);
  let result;
  if (pathname === '/api/parsetime') {
    result = { hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds() };
  } else if (pathname === '/api/unixtime') {
    result = { "unixtime": date.getTime() };
  }

  result = JSON.stringify(result);
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(result);
});

server.listen(port);
