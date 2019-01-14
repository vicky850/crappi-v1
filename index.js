const http = require('http');

const port=process.env.PORT || 7000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World   VIJAY</h1>');
});
















server.listen(port,() => {
  console.log(`Server running at port `+port);
});