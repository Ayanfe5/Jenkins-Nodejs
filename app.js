var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("A blessed and Highly favoured Ayanfeoluwa!!!");
});

app.listen(4000);