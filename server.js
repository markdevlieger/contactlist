var express = require('express');
var app = express( );

app.use(express.static(__dirname + '/webapp'));

// configure the app
//app.configure( function(){
//	app.use(express.logger('dev'));
//	app.use(express.bodyParser());
//} );

app.listen(4000);
console.log('Listening on port 4000');