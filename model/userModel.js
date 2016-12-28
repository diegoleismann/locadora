// #US UserModel

//função que codifica a senha em Sha256
function sha256(password){
    var crypto = require('crypto');
    var hash = crypto.createHash('sha256');
    hash.update(password);
    return (hash.digest('hex'));
}

//Função Checar E-mail
function checkEmail(user_email, callback){
  var db = require("../db.js");
  var emailSQL = "SELECT * FROM users WHERE email='"+user_email+"'";
  db.query(emailSQL,[], function(err, result){
    if(err){ callback(true, "Erro no Banco de Dados #US-L14"); }
    if(result.length>0){callback(true,"E-mail já cadastrado")}else{
      callback(false)
    }
  })
}

//função Inserir Usuário
function insertUser(field, callback){
  var db = require("../db.js");
  var pass = sha256(field.password);
  var insertSQL = "INSERT INTO users (name, email, password) VALUES ('"+field.name+"','"+field.email+"','"+pass+"')"
  db.query(insertSQL,[], function(err){
    if(err){callback(true, "Erro no Banco de Dados #US-L27")}else{
      callback(false);
    }

  })
}

//Função Autenticação
function autentication(field, callback){
  var db = require("../db.js");
  var pass = sha256(field.password);
  var checkPassword = "SELECT * FROM users WHERE email='"+field.email+"' AND password='"+pass+"'";
  db.query(checkPassword,[], function(err, result){
    if(err){callback(true, "Erro no Banco de Dados #US-L14")}else{
      if(result.length>0){callback(false, false, result[0])}else{
        callback(true,"500 Erro de autenticação")
      }
    }
  })
}

// Classe Usuário
function User() {

  //propiedade de Adicionar Usuário
  this.addUser = function(field, req, res){
    //Se usuário for Admin (id_user == 1)
    if(req.session.user && req.session.user.id_user === 1){
      var user_name = field.name;
      var user_email = field.email;
      var user_password = field.password;

      if(user_name == undefined || user_email == undefined || user_password == undefined){
        res.json({message:'Parametros name, email e password são obrigatórios!'});
        return false;
      }

      //Verifica se e-mail já foi cadastrado
      checkEmail(user_email,function(err, info){
        //se houver erro ao inserir ele retona
        if(err){
          res.json({message:info})
        }else{

        //Insere Usuário
        insertUser(field, function(err, info) {
          //se houver erro ao inserir ele retona
          if(err){res.json({message:info})}else{
            //senão ele conclui retorna dados do novo usuário, ele remove campo password.
            delete field.password;
            res.json(field);
          }
        })
      }})
    }else{
      res.json({message:'Apenas Admin pode adicionar usuários via API'});
    }

  }
  //propriedade Autentica Login
  this.login = function(field, req, res){
    var user_email = field.email;
    var user_password = field.password;

    if(user_email == undefined || user_password == undefined){
      res.json({message:'E-mail e Password são obrigatórios'});
    }

    autentication(field, function(err, info, user){
      if(err){ res.json({message:info})}else{
        delete user.password;
        req.session.user = user;
        res.json(user);
      }
    })
  }

  //propriedade que desloga o usuário
  this.logout = function(req, res){
    if(req.session.user){
      delete req.session.user;
      res.json({message:"Volte sempre!"})
    }else{
      res.json({message:"Nenhum usuário logado!"})
    }
  }
}

module.exports = new User();
