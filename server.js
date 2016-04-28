var express = require('express');
var MongoClient = require('mongodb').MongoClient;
//var contactlistDb = require('./service/contactlistDb.js');

var app = express( );
var db;

MongoClient.connect("mongodb://localhost:27017/contactlist", (err, database) => {
	if (err) return console.log(err);

	db = database;
	app.use((req, res, next)=>{
		req.db = db;
		next();
	});

	app.use(express.static(__dirname + '/webapp'));
	// app.use("/service/contactlistDb", contactlistDb);
	app.listen(4000, ()=>{
		console.log("Listening on port 4000");
	})

});

module.exports = app;