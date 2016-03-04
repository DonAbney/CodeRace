var fs = require("fs");

exports.newRacer = function(req){

  var fileName = __dirname + '/participants.json';
  var person = JSON.stringify({racer: {name: req.body.name, email: req.body.email}});

  fs.appendFile(fileName, person);
};
