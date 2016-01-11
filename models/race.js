var fs = require("fs");

exports.getStatus = function(callback){

  var fileName = __dirname + '/race.json';

  fs.readFile( fileName, 'utf8', function (err, data) {
    data = JSON.parse( data );
    callback(null,{});
  });

};
