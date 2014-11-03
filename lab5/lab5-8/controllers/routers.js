var express = require('express');

var router = express.Router();

router.get('/', function(req, res){
	res.render('index', {'title' : 'Lab5-8'});
});


router.post('/message', function(req, res){
	var data = {
		name : "Algún Nombre",
		age : "100",
		id : "4848447"
	};

	console.log(req.body);

	res.header('Content-Type', 'text/json').send(data);
});


router.get('/data', function(req, res){

	try{

		//Modulo en Node.js para manipular archivos
		var fs = require('fs');

		var path = require('path');

		fs.readFile(path.join(__dirname, "../models/data.json"), "utf-8", function(err, data){

			var json = JSON.parse(data);

			res.header('Content-Type', 'text/json').send(json);
		});
	} catch(err){
		console.log(err);
	}
});

router.post('/login', function(req, res){

	if(req.body.userid === "alejo8591@gmail.com" && req.body.password === "1234"){
		var json = {

			"name": "Alejandro Romero",
			"email": "alejo8591@gmail.com",  
			"cookie" :  "dfljlskfgfgfsñlkgj",
			"uid" : "22828282"
		};

		console.log(json);

		res.header('Content-Type', 'text/json').send(json);

	} else {
		var json = {
			"error" : "Usuario no existe"
		};

		console.log(json);

		res.header('Content-Type', 'text/json').send(json);
	}
});


module.exports = router;