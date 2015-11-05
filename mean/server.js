var express = require('express');
var app = express();

app.use('/', function(req, res){
    res.end('Hello world!');
});

app.listen(3000);
console.log('Server running!');

module.exports = app;