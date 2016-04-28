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

module.exports = router;