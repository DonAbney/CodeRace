var http = require('http');
var fs = require("fs");

var fileName = 'results.txt';
var racerNum = 'racer1';
var percentage = 0;

fs.watchFile(fileName, function(curr, prev) {
  //call another funtion that parses
  parseFile(fileName);
  //call a thing that PUTS
  var options = {
    host: '192.168.128.109',
    path: '/percent/' + racerNum + '/' + percentage,
    port: 8081,
    method: 'PUT'
  };
  http.request(options, callback).end();
  //manage file size or just delete it
});

var parseFile = function(fileName) {
  var number;

  setPercentage(number);
}

var setPercentage = function(inPercent) {
  percentage = inPercent;
}



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
