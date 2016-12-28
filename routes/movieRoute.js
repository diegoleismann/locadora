var express = require('express');
var router = express.Router();
var Movie = require('../model/movieModel');

router.get('/', function(req, res) {
      res.json({message:"Bem vindo a Locadora! API para Pesquisar Filmes, Faça o login Alugar e Devolver"});
});

router.get('/list', function(req, res) {
      Movie.list(req, res)
});

router.get('/search', function(req, res) {
      Movie.search(req, res);
});

router.post('/rent', function(req, res) {
    if(req.session.user){
      Movie.rent(req, res);
    }else{
      res.json({message:"Faça o login para alugar"});
    }
});

router.post('/giveback', function(req, res) {
    if(req.session.user){
      Movie.giveBack(req, res);
    }else{
      res.json({message:"Faça o login para alugar"});
    }
});

module.exports = router;
