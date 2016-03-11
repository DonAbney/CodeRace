var fs = require("fs");
var Race = function() {};

Race.prototype.getRaceData = function(callback) {

  var fileName = __dirname + '/race.json';

  fs.readFile( fileName, 'utf8', function (err, data) {
    data = JSON.parse( data );
    callback(null,{});
  });

  return {junk: 'junk'};

}

Race.prototype.getStatus = function (callback) {
  if (!raceData) {
    raceData = this.getRaceData(null);
  }

  return raceData;
}

module.exports = Race;
