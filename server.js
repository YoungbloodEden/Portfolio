var express = require('express');
var app     = express();
var path    = require('path');
var favicon = require('serve-favicon');
var port    = process.env.PORT || 3000;

app.use(favicon(__dirname + '/favicon.ico'));

app.use(express.static(path.join(__dirname,'public')));

app.use('/scripts', express.static(__dirname + '/bower_components'))

app.get('/.well-known/acme-challenge/VakPosMfm69xYuY83z-0ZQfkgdRUgjHktaVpdotElFw', function(req, res){
res.render("VakPosMfm69xYuY83z-0ZQfkgdRUgjHktaVpdotElFw.22EMFKUX8piP_SxRePAiQWKA8lAly-1jhmIggcizTfs")
});

app.all('/*', function(req, res, next) {
  res.sendFile('/public/index.html', { root: __dirname });
});

app.listen(port, function(){
  console.log("++++++++++++++++++++++++++++++++++")
  console.log("Node running on port "+port);
  console.log("++++++++++++++++++++++++++++++++++")
});
