var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(require('./controllers'));

app.listen(8081, function () {
  console.log('Race app listening at port 8081');
})
