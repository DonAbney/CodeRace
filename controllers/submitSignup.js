var express = require('express');
var app = express();
var fs = require("fs");


function submitSignup(req, res) {
  var options = {
    root: './views/',
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };
  
  var person = JSON.stringify({racer: {name: req.params.name, email: req.params.email}});

  fs.appendFile(__dirname + "/" + "participants.json", person);
  res.sendFile('success.html', options);


}

module.exports = submitSignup;
