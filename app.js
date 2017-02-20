var express = require('express');
var app = express();
var bodyParser = require('body-parser');
require('dotenv').config();

app.use(bodyParser.json());
// in latest body-parser use like below.
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use(require('./controllers'));

app.listen(8081, function () {
  console.log('Race app listening at port 8081...holla at me');
})
