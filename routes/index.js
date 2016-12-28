var express = require('express');
var router = express.Router();

//Retornos quando enviadas requisições inválidas
router.get('/', function(req, res) {
      res.json({message:"Requisição Inválida"});
});
router.post('/', function(req, res) {
      res.json({message:"Requisição Inválida"});
});

module.exports = router;
