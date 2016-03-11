var Race = require('../models/race');

function getStatus(req, res) {

  var race = new Race();

  var raceStatus = race.getStatus();
  res.end(JSON.stringify(raceStatus));

}

module.exports = getStatus;
