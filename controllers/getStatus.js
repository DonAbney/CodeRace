var Race = require('../models/race');

function getStatus(req, res) {

  Race.getStatus(function(err, raceStatus){
    res.end(raceStatus);
  });

}

module.exports = getStatus;
