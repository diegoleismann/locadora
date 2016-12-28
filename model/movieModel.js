// #MV MovieModel

// configure aqui o limite de itens por página.
const list_itens = 30;

//Função do Calculo do Offset (paginação dos filmes)
function offsetMysql(page) {m = page - 1; return list_itens*m }

// Função Listar disponíveis
function latest(options, callback){
  var db = require("../db.js");
  var offset = offsetMysql(options.page);
  // state 1 = Disponivel  2 = Alugado  3= Removido
  var listSQL = "SELECT * FROM movies WHERE state='1' ORDER BY id_movie DESC LIMIT "+list_itens+" OFFSET "+offset+" ";
  db.query(listSQL,[], function(err, result){
    if(err){callback(true,[], "Erro de Banco de Dados #MV-L14")}
    if(result.length>0){
      callback(false, result)
    }else{
      callback(true,[], "Nenhum filme disponivel")
    }
  })
}

//função Pesquisar filmes
function search(options,  callback){
  var db = require("../db.js");
  var offset = offsetMysql(options.page);
  var search_array=[];

  if(options.q){
    options.title = options.q;
    options.director = options.q;
  }

  if(options.title){
    search_array.push(" title LIKE '%"+options.title+"%' ");
  }

  if(options.director){
    search_array.push(" director LIKE '%"+options.director+"%' ");
  }
  var operator_query = "OR"
  if(options.type == "ex"){
    operator_query = "AND"
  }
  var search_query = "";

  if(search_array.length > 0){
  search_array.forEach(function(item, index){
    if(index>0){
      search_query += operator_query
    }
    search_query += item;
  })
  }

  if(search_query.length > 0){
    search_query = "AND ("+search_query+")";
  }



  var searchSQL = "SELECT * FROM movies WHERE state!='3' "+search_query+" ORDER BY id_movie DESC LIMIT "+list_itens+" OFFSET "+offset+" ";
  console.log(searchSQL)

  db.query(searchSQL,[], function(err, result){
    if(err){callback(true,[], "Erro de Banco de Dados #MV-L66")}
    if(result.length>0){
      callback(false, result)
    }else{
      callback(true,[], "Nenhum filme disponivel")
    }
  })
}

//Função Alugar Filme
function rentMovie(options, callback){
  var db = require("../db.js");

  var checkMovieSQL = "SELECT * FROM movies WHERE id_movie='"+options.id_movie+"' ";
  var rentSQL = "UPDATE movies SET state=2 WHERE id_movie='"+options.id_movie+"' ";
  db.query(checkMovieSQL,[], function(err, result){
    if(err){callback(true, "Erro de Banco de Dados #MV-L82")}
    if(result.length>0){
      var movie = result[0];
      if(movie.state == 2){
        callback(true,"Filme já está alugado!")
      }else{
        db.query(rentSQL,[], function(err, result){
          if(err){ callback(true, "Erro de Banco de Dados #MV-L89"); }else{
            callback(false,"Filme alugado com sucesso!")
          }
        })
      }
    }else{
      callback(true, "Filme não encontrado!")
    }
  })
}

//função Devolver Filme
function giveBackMovie(options, callback){
  var db = require("../db.js");

  var checkMovieSQL = "SELECT * FROM movies WHERE id_movie='"+options.id_movie+"' ";
  var rentSQL = "UPDATE movies SET state=1 WHERE id_movie='"+options.id_movie+"' ";
  db.query(checkMovieSQL,[], function(err, result){
    if(err){callback(true, "Erro de Banco de Dados #MV-L107")}
    if(result.length>0){
      var movie = result[0];
      if(movie.state == 1){
        callback(true,"Filme já foi devolvido!")
      }else{
        db.query(rentSQL,[], function(err, result){
          if(err){ callback(true, "Erro de Banco de Dados #MV-L114"); }else{
            callback(true,"Filme devolvido com sucesso!")
          }
        })
      }
    }else{
      callback(true, "Filme não encontrado!")
    }
  })
}

function Movie(){
  //propriedade listar Disponiveis
  this.list = function(req, res){
    var options = {};

    //controle da páginação
    options.page = req.query.page ? req.query.page : 1;

    latest(options,function(err, movies, message){
      if(err){
        res.json({message:message});
      }else{
        res.json(movies);
      }

    })
  }
  //propriedade Pesquisar
  this.search = function(req, res){
    var options = {};

    //verifica a páginação
    options.page = req.query.page > 0 ? req.query.page : 1;

    //pesquisa no titulo
    options.title = req.query.title ? req.query.title : false;

    //pesquisa no nome do diretor
    options.director = req.query.director ? req.query.director : false;

    //Define se a pesquisa é Inclusiva "in" (Operador OR) ou Exclusiva "ex" (Operador AND)
    options.type =  req.query.type ? req.query.type : "in";

    /*pesquisa em todos os campos o mesmo termo!
    * ATENÇÃO o termo "q" sobrescreve  os termos title e director na cosulta.
    */
    options.q = req.query.q ? req.query.q : false;

    search(options, function(err, movies, message){
      if(err){
        res.json({message:message});
      }else{
        res.json(movies);
      }

    })
  }
  //propriedade Alugar
  this.rent = function(req, res){
    var options = {};
    //se parametro filme setado
    if(req.query.movie){
      options.id_movie = parseInt(req.query.movie)

      rentMovie(options, function(err, info){
        if(err){ res.json({message:info}); }else{
          res.json({message:info});
        }
      })
    //senão ele retorna erro
    }else{
      res.json({message:"Parametro movie é obrigatório!"});
    }
  }

  //propriedade Devolver
  this.giveBack = function(req, res){
    var options = {};
    //se parametro Filme setado
    if(req.query.movie){
      options.id_movie = parseInt(req.query.movie);

      giveBackMovie(options, function(err, info){
        if(err){ res.json({message:info}); }else{
          res.json({message:info});
        }
      })
    //Senão retona erro
    }else{
      res.json({message:"Parametro Movie é obrigatório!"});
    }
  }

}

module.exports = new Movie();
