var express = require('express');
var app = express();
var fs = require("fs");
var path = require("path");
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

  //fs.appendFile(path.join(__dirname, '..', 'participants.json'), person);
  participants.newRacer(req);
  res.sendFile('success.html', options);


}

module.exports = submitSignup;
