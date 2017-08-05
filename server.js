var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var xml = require('xml');
var twilio = require('twilio');
var VoiceResponse = twilio.twiml.VoiceResponse;

//uses
app.use (express.static('public'));
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

  res.sendFile(path.resolve('./public/index.html'));
});
app.get( '/index.xml', function(req, res){
  console.log('base url hit');

  res.sendFile(path.resolve('./public/index.xml'));
});
app.get( '/dontcall', function(req, res){
  console.log('base url hit');

  res.sendFile(path.resolve('./public/dontcall.m4a'));
});

var express = require('express');
var router = express.Router();



app.get('/:salesNumber', function(request, response) {
    var salesNumber = request.params.salesNumber;
    var twimlResponse = new VoiceResponse();

    twimlResponse.say('Thanks for contacting our sales department. Our ' +
                      'next available representative will take your call. ',
                      { voice: 'alice' });

    twimlResponse.dial(salesNumber);

    response.send(twimlResponse.toString());
});
