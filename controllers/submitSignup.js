var Race = require('../models/race');
var Participants = require('../models/participants');

function submitSignup(req, res) {
  var participants = new Participants();
  var race = new Race();

  var options = {
    root: './views/',
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };

  race.setRacerInfo(req);
  participants.newRacer(req);
  res.sendFile('success.html', options);


}

module.exports = submitSignup;
