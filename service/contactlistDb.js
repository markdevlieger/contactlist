var express = require('express');
var router = express.Router();

/*
 * Get contactlist
 */
router.get('/contactlist', (req, res) => {
	var db = req.db;
	var cursor = db.collection('contactlist').find({},{firstName:1, lastName:1}).sort({"lastName":1});
	var result = [];
	cursor.each((err, doc)=>{
		if (err) {
			console.log(err);
			return res.end();
		}
		if (doc !== null){
			result.push(doc);
		} else {
			res.write(JSON.stringify({"Contacts":result}));
			res.end();
		}
	});
	
});

/*
 * Get single contact
 */
router.get('/singleContact', (req, res) =>{
	var db = req.db;


	var id = Number.parseInt(req.query.contactId);
	var cursor = db.collection('contactlist').find({"_id": id});
	var result = {};
	cursor.each((err, doc)=>{
		if (err){
			console.log(err);
			return res.end();
		}
		if (doc!==null){
			result = doc;
			console.log(doc);
		} else {
			console.log(result);
			res.write(JSON.stringify(result));
			res.end();
		}
	})

});

module.exports = router;