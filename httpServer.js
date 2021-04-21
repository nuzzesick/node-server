// Example of NodeJS WebServer without using Express
const http = require('http');

const server = http.createServer((req, res) => {
  res.write('Hello world');
  res.end();
});

server.listen(3000);

console.log('Listening port: ', 3000)