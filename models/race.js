var fs = require("fs");
var Race = function() {};
require('dotenv').config();

var racerNumber = process.env.RACER;

Race.prototype.getRaceData = function(callback, req) {

  var fileName = __dirname + '/race.json';

  fs.readFile( fileName, 'utf8', function (err, data) {
    data = JSON.parse( data );
    global.raceData = data;
    callback(req);
  });

}

Race.prototype.getStatus = function () {
  if (!global.raceData) {
    return this.getRaceData(this.returnRaceData);
  } else {
    return this.returnRaceData();
  }
}

Race.prototype.returnRaceData = function() {
  return global.raceData;
}

Race.prototype.setRacerInfo = function(req) {
  if (!global.raceData) {
    this.getRaceData(this.persistRacerInfo, req);
  } else {
    this.persistRacerInfo(req);
  }
}

Race.prototype.persistRacerInfo = function(req) {
  global.raceData['racer' + racerNumber].screenName = req.body.screenName;
  fs.writeFile( __dirname + "/" + "race.json", JSON.stringify(global.raceData));
}

Race.prototype.setRacerProgress = function(req) {

  global.raceData[req.params.racer].percentage = req.params.percentage;
  fs.writeFile( __dirname + "/" + "race.json", JSON.stringify(global.raceData));
}

module.exports = Race;
