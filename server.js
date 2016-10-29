var express = require('express');
var app     = express();
var path    = require('path');

app.use(express.static(path.join(__dirname,'public')));

app.get('/', function(req, res){
    res.render('index');
});

app.listen(process.env.PORT, function(){
  console.log("++++++++++++++++++++++++++++++++++")
  console.log("Node running on port "+process.env.PORT);
  console.log("++++++++++++++++++++++++++++++++++")
});
