var Race = require('../models/race');

function submitStatus(req, res) {

  var race = new Race();

  var raceStatus = race.setRacerProgress(req);
  res.end("Updated " + req.params.racer + " to " + req.params.percentage);

}

module.exports = submitStatus;
