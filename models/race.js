var fs = require("fs");
var Race = function() {};

var raceData;

Race.prototype.getRaceData = function() {

  var fileName = __dirname + '/race.json';

  fs.readFile( fileName, 'utf8', function (err, data) {
    data = JSON.parse( data );
    return data;
  });

}

Race.prototype.getStatus = function () {
  if (!raceData) {
    raceData = this.getRaceData();
  }

  return raceData;
}

module.exports = Race;
