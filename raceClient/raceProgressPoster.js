var http = require('http');

var racerNum = 'racer1';
var percentage = 22;

var options = {
  host: '192.168.128.109',
  path: '/percent/' + racerNum + '/' + percentage,
  port: 8081,
  method: 'PUT'
};

var callback = function(response) {
  var str = '';

  //another chunk of data has been recieved, so append it to `str`
  response.on('data', function(chunk) {
    str += chunk;
  });

  //the whole response has been recieved, so we just print it out here
  response.on('end', function() {
    console.log(str);
  });
};

http.request(options, callback).end();
