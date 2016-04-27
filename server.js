var express = require('express');
var logger = require('morgan');

var app = express();
var PORT = process.env.PORT || 1738;

app.use('/js', express.static('public/js'));
app.use('/css', express.static('public/css'));
app.use('/images', express.static('public/images'));
app.use(logger('dev'));


app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.listen(PORT, function() {
  console.log("Listening on port %s", PORT);
});