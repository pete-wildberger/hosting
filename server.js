var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//uses
// app.use (express.static('public'));
app.use( bodyParser.urlencoded( { extended: true } ) );

//globals
var port = process.env.PORT || 2017;

//listen
app.listen(port, function(){
  console.log('up on 2017');
});

//base URL
app.get( '/', function(req, res){
  console.log('base url hit');

  res.sendFile(path.resolve('/index.html'));
});
app.get( '/dontcall', function(req, res){
  console.log('base url hit');

  res.sendFile(path.resolve('./dontcall.m4a'));
});
