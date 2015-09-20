var express = require('express');
var app = express();
var path    = require("path");

app.use(express.static('public'));

app.get('/', function(req, res){
	res.render('index.ejs', {compteur: 'salut'});
});

app.use(function(req, res, next){
    res.status(404).send('Page introuvable !');
});

app.listen(3000);
