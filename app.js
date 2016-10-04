var http = require('http');

var static_content = require('./static.js');

var server = http.createServer(function (request, response) {
  console.log('client request url: ', request.url);
  static_content(request, response);
});

server.listen(7077);
console.log('Running at localhost:7077');
