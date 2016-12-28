var express = require('express');
var router = express.Router();
var User = require("../model/userModel");

router.get('/', function(req, res) {
    if(req.session.user == undefined){
      res.json({message:"Requisição Inválida"});
    }
    res.json(req.session.user);
});

router.post('/new', function(req, res) {
  User.addUser(req.query,req, res);
});
router.post('/login', function(req, res) {
  User.login(req.query, req, res);
});

router.post('/logout', function(req, res) {
  User.logout( req, res);
});


module.exports = router
