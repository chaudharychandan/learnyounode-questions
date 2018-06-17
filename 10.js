const net = require('net');
const port = process.argv[2];

const fillZero = (data) => {
  return data > 9 ? data : `0${data}`;
}

const now = () => {
  const d = new Date();
  let month = fillZero(d.getMonth() + 1);
  let date = fillZero(d.getDate());
  let hours = fillZero(d.getHours());
  let minutes = fillZero(d.getMinutes());

  return `${d.getFullYear()}-${month}-${date} ${hours}:${minutes}`;
}

const server = net.createServer((socket) => {
  socket.end(`${now()}\n`);
});
server.listen(port);
