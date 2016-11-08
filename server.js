var express = require('express');
var app     = express();
var path    = require('path');
var favicon = require('serve-favicon');
var port    = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname,'public')));

app.use('/scripts', express.static(__dirname + '/bower_components'))

app.use(favicon(__dirname + 'favicon.ico'));

app.all('/*', function(req, res, next) {
  res.sendFile('/public/index.html', { root: __dirname });
});

app.listen(port, function(){
  console.log("++++++++++++++++++++++++++++++++++")
  console.log("Node running on port "+port);
  console.log("++++++++++++++++++++++++++++++++++")
});
