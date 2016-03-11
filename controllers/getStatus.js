var Race = require('../models/race');

function getStatus(req, res) {

  var race = new Race();

  race.getStatus(function(err, raceStatus){
    res.end(raceStatus);
  });

}

module.exports = getStatus;
