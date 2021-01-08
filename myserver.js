const http = require('http');
const host = '192.168.137.7';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Primer servidor con Node.Js');
});
server.listen(port, host, () => {
  console.log(`Servidor corriendo en http://${host}:${port}`);
});