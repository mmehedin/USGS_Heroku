var express = require('express');
var model = require('../models/usgs_model');
var router = express.Router();
var controller = require('../controllers/controller');


/*handling errors - need to connect with the rest*/
router.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something is rotten in Denmark!');
});


/*Executed everytime the app starts*/
router.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bridges - earthquakes'});
});



router.get('/USGS', function (req, res, next) {
  res.send('USGS database');
});

//sending num number of earthquakes
router.get('/USGS/eq/:num', function(req, res, next){
	var usgs_all = req.db;
	
	var coll_all = usgs_all.get('eq');
	console.log('printingdb');
	coll_all.find({}, {limit :req.params.num}, function(e,docs){
		
		res.send(JSON.stringify(docs));
	});

});

//sending all eq
router.get('/USGS/eq', function(req, res, next){
	var usgs_all = req.db;
	
	var coll_all = usgs_all.get('eq');
	console.log('printingdb');
	coll_all.find({}, function(e,docs){
		res.send(docs);
	});


});




console.log('model');
module.exports = router;



