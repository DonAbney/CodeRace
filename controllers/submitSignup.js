var express = require('express');
var app = express();
var fs = require("fs");
var path = require("path")

function submitSignup(req, res) {
  var options = {
    root: './views/',
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };
  var person = JSON.stringify({racer: {name: req.body.name, email: req.body.email}});

  fs.appendFile(path.join(__dirname, '..', 'participants.json'), person);
  res.sendFile('success.html', options);


}

module.exports = submitSignup;
