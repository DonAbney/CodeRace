var http = require('http');
var fs = require("fs");

var HOME = process.env['HOME'];
var fileName = HOME + '/race/results.txt';
var racerNum = process.argv[2];
var percentage = 0;
var opions = {};

if(racerNum == null) {
  console.log('Please enter a racer number');
} else {
  console.log('Race progress started with racer num ' + racerNum);

  fs.watchFile(fileName, function(curr, prev) {
    //call another funtion that parses and sets perentage
    parseFile(fileName, setOptions);
    //manage file size or just delete it
  });
}

var parseFile = function(fileName, stuff) {
  fs.readFile(fileName, function(err, data) {
    if (err) {
      return console.error(err);
    }
    var lines = data.toString().trim().split('\n');
    var lastLine = lines.slice(-1)[0];
    var tokens = lastLine.split(" ");
    if (tokens.length > 9) {
      var number;
      if(tokens[10] == 'SUCCESS'){
        number = 100
      }
      else{
        var denomenator = tokens[9] ;
        var numerator = denomenator - tokens[10].slice(1);
        number = (numerator / denomenator) * 100;
      }
    setPercentage(Math.floor(number));
    stuff();
  }
  });
}

var setOptions = function() {
  options = {
    // update host
    host: '127.0.0.10',
    path: '/percent/' + racerNum + '/' + percentage,
    port: 8081,
    method: 'PUT'
  };
  http.request(options, callback).end();
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
