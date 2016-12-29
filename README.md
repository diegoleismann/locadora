# locadora
Modelo de webservice para locadora desenvolvido em NodeJs e MySQL.

#Instalando o sistema
1) Faça o clone do projeto com git e instale as dependencias.
```
git clone https://github.com/diegoleismann/locadora.git locadora
cd locadora
npm install
```

2) Crie um banco de dados no PhpMyAdmin.

3) Faça o importe do arquivo banco.sql para criar tabelas.

4) Atualize arquivo db.js com usuário, senha, database da sua configuração do banco de dados.

#Inicie o Webservice
```
npm start
```
#Documentação da API locadora

## /list
Método: GET. Listar filmes disponíveis. Público.

__page:__ Número da Página. Inteiro. Padrão: 1.
```
/list?page=8
```

A paginação está configurada com 30 itens por página. Pode ser editado no arquivo /model/movieModel.js Linha 4.

#### RETORNO: Listagem de filmes disponíveis ou mensagem de alerta. json/objeto.

## /search
Método: GET. Pesquisar filmes. Público.

__title:__ Pesquisa string no título do filme. String. Padrão: null.

```
/search?title=Hellboy
```

__director:__ Pesquisa string no diretor do filme. String. Padrão: null.

```
/search?director=Tim Burton
```

__type:__ Define o tipo de pesquisa: String. Padrão: "in".

Tipo __"in"__ Inclusiva, pelo menos um termo do "title" ou "director" deve ser válido para ser adicionado ao resultado.
```
/search?title=bastardos&director=stanley&type=in
```
Tipo __"ex"__ Exclusiva, quando os dois "title" e "director" tem que ser válidos para ser adicionado ao resultado.

```
/search?title=batmans&director=burton&type=ex
```


__q:__ Pesquisa string no título e no diretor do filme. String. Padrão: null.
ATENÇÃO: O parametro "q" sobrescreve os termos "title" e "director" na consulta.
```
/search?q=tim
```

__page:__ Paginação do resultado. Inteiro. Padrão: 1.
```
/search?q=e&page=2
```

#### RETORNO: Listagem de filmes ou mensagem de alerta. json/objeto.

## /rent
Método: POST. Atualiza o estado do Filme para Alugado. Requer Login.

__movie:__ Termo id do filme que vai alugar. Obrigatório.
```
/rent?movie=60
```

#### RETORNO: Mensagem de sucesso ou alerta. json/objeto.

## /giveback
Método: POST. Atualiza o estado do filme para Disponível. Requer Login.

__movie:__ Termo id do filme que vai "devolver" ou tornar disponível novamente. Obrigatório.
```
/giveback?movie=60
```

#### RETORNO: Mensagem de sucesso ou alerta. json/objeto.

## /user/login
Método: POST. Faz o login de usuário no sistema. Público.

__email:__ E-mail do usuário. Obrigatório.
__password:__ Palavra-chave do usuário.  Obrigatório.

#### RETORNO: Informações do Usuário ou mensagem de alerta. json/objeto.

## /user
Método: GET. Retorna as informações do usuário logado. Requer Login.

Não há termos para essa requisição.

#### RETORNO: Informações do Usuário ou mensagem de alerta. json/objeto.

## /user/new
Método: POST. Adiciona um novo usuário. Requer Login de Admin. No banco de dados existe usuário com id_user = 1, E-mail __diegoleismann@gmail.com__ e senha __4alltest__. A senhas salvas no banco de dados são protegidas com SHA256.

__email:__ E-mail do novo usuário. Obrigatório.
__password:__ Palavra-chave do novo usuário. Obrigatório.
__name:__ Nome de exibição do usuário. Obrigatório.

#### RETORNO: Messagem de sucesso ou alerta. json/objeto.

## /user/logout
Método: POST. Desloga o usuário.

Não há termos para essa requisição.

#### RETORNO: Messagem de sucesso ou alerta. json/objeto.


#Documentação de erros

\#MV-L14: Banco de dados parou de responder na consulta /list.

\#MV-L66: Banco de dados parou de responder na consulta /search.

\#MV-L82: Banco de dados parou de responder na consulta /rent.

\#MV-L89: Banco de dados parou de responder na consulta /rent.

\#MV-L107: Banco de dados parou de responder na consulta /giveback.

\#MV-L114: Banco de dados parou de responder na consulta /giveback.

\#US-L14: Banco de dados parou de responder na consulta /user/new.

\#US-L27: Banco de dados parou de responder na consulta /user/new.

\#US-L42: Banco de dados parou de responder na consulta /user/login.

Desenvolvido por Diego Leismann. &copy; 2016 - Todos direitos reservados.
