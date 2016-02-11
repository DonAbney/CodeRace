var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*
  Logic has been moved to to getLeaderboard controller.

app.get('/dashboard', function (req, res) {
   res.sendfile('race.html');
})
*/

/*
  The logic to grab the signup page has been moved to the getSignup controller
  still need to figure out how to manage handling assigning distinct racer numbers
  to racers as they sign in.

app.get('/signup/:racer', function (req, res) {
   res.sendfile('signup' + req.params.racer + '.html');
})
*/

app.post('/submit_signup', function (req, res) {

   var person = JSON.stringify({racer: {name: req.body.name, email: req.body.email}});
   fs.appendFile(__dirname + "/" + "participants.json", person, function() {

      fs.readFile( __dirname + "/" + "race.json", 'utf8', function (err, data) {
          data = JSON.parse( data);
          data[req.body.racer].name = req.body.screenName;

          fs.writeFile( __dirname + "/" + "race.json", JSON.stringify(data), function () {
            res.sendfile('success.html');
          });
       });
   });
})

app.put('/percent/:racer/:percentage', function (req, res) {
   fs.readFile( __dirname + "/" + "race.json", 'utf8', function (err, data) {
       data = JSON.parse( data);
//       console.log('PUT Update');
       data[req.params.racer].percent = req.params.percentage

       fs.writeFile( __dirname + "/" + "race.json", JSON.stringify(data), function () {
         res.end("Updated " + req.params.racer + " to " + req.params.percentage);
       });
    });
})

/*
  Logic has been moved to to getStatus controller.

app.get('/status', function (req, res) {
   fs.readFile( __dirname + "/" + "race.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       res.end(JSON.stringify(data));
   });
})
*/

/*
  starting of the server is now being handled in app.js

var server = app.listen(8081, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("Race app listening at http://%s:%s", host, port);
})
*/
