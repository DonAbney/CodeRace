var express = require('express');
var app = express();
var fs = require("fs");

app.use(express.static('public'));

app.get('/dashboard', function (req, res) {
   res.sendfile('race.html');
})

app.get('/signup', function (req, res) {
   res.sendfile('signup.html');
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

app.get('/status', function (req, res) {
   fs.readFile( __dirname + "/" + "race.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       res.end(JSON.stringify(data));
   });
})

var server = app.listen(8081, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("Race app listening at http://%s:%s", host, port);

})
