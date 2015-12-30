var http = require('http');
var fs = require("fs");

var fileName = 'results.txt';
var racerNum = 'racer1';
var percentage = 0;
var opions = {};

fs.watchFile(fileName, function(curr, prev) {
  //call another funtion that parses and sets perentage
  parseFile(fileName);
  //call a thing that PUTS
  setOptions();
  http.request(options, callback).end();
  //manage file size or just delete it
});

var parseFile = function(fileName) {
  var number = 0;
  fs.readFile(fileName, function(err, data) {
    if (err) {
      return console.error(err);
    }
    var lines = data.toString().trim().split('\n');
    var lastLine = lines.slice(-1)[0];

    console.log(lastLine);
  });

  setPercentage(number);
}

var setOptions = function() {
  options = {
    host: '192.168.128.109',
    path: '/percent/' + racerNum + '/' + percentage,
    port: 8081,
    method: 'PUT'
  };
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
