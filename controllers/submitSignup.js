
var participants = require('../models/participants');

function submitSignup(req, res) {
  var options = {
    root: './views/',
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };

  participants.newRacer(req)
  res.sendFile('success.html', options);


}

module.exports = submitSignup;
