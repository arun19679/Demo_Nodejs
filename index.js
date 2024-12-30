var express = require('express');
var app = express();

app.get('/getuserdata2', function(req, res){
   res.send("Hello world!");
});

app.get('/modifyuser', function(req, res){
   res.send("Hello world2!");
});

app.listen(29091);