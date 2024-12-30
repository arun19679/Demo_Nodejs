var express = require('express');
var app = express();

app.get('/getuserdata2', function(req, res){
   res.send("Hello world!");
});



app.listen(29091);