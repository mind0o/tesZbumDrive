var express = require('express');
var app = express();

app.get('/data', function(req, res){
  res.send('hello world\nnono\nyes\n'); //replace with your data here
});

app.listen(3000);