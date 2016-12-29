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
Metodo: GET. Listar filmes disponiveis. Público.

__page:__ Numero da Página. Inteiro. Padrão: 1.

A paginação está configurada com 30 itens por página. Pode ser editado no arquivo /model/movieModel.js Linha 4.

#### RETURN: Listagem de filmes. json/objeto.

## /search
Metodo: GET. Pesquisar filmes. Público.

__title:__ Pesquise string no título do filme. String. Padrão: null.

__director:__ Pesquisa string no diretor do filme. String. Padrão: null.

__tipo:__ Define o tipo de pesquisa: String. Padrão: "in".

> __"in"__ Inclusiva, pelo menos um termo do "title" ou "director" deve ser válido para ser adicionado ao resultado.
> __"ex"_ Exclusiva, quando os dois "title" e "director" tem que ser válidos para ser adicionado ao resultado.

__q:__ Pesquisa string no título e no diretor do filme. String. Padrão: null.
ATENÇÃO: O parametro "q" sobrescreve os termos "title" e "director" na consulta.

__page:__ Paginação do resultado. Inteiro. Padrão: 1.

#### RETURN: Listagem de filmes. json/objeto.

## /rent
Método: POST. Atualiza o estado do Filme para Alugado. Requer Login.

__movie:__ Termo do id do filme que vai alugar. Obrigatório.

#### RETURN: Mensagem de sucesso ou alerta. json/objeto.

## /giveback
Método: POST. Atualiza o estado do filme para Disponível. Requer Login.

__movie:__ Termo do id do filme que vai "devolvar", tornar disponível novamente. Obrigatório.

#### RETURN: Mensagem de sucesso ou alerta. json/objeto.

## /user/login
Método: POST. Faz o login de usuário no sistema. Público.

__email:__ E-mail do usuário. Obrigatório.
__password:__ Palavra-chave do usuário.  Obrigatório.

#### RETURN: Informações do Usuário. json/objeto.

## /user
Método: GET. Retorna as informações do usuário logado. Requer Login.

Não há termos para essa requisição.

#### RETURN: Informações do Usuário. json/objeto.

## /user/new
Método: POST. Adiciona um novo usuário. Requer Login de Admin. No banco de dados existe usuário com id_user = 1, E-mail __diegoleismann@gmail.com__ e senha __4alltest__. A senhas salvas no banco de dados são protegidas com SHA256.

__email:__ E-mail do novo usuário. Obrigatório.
__password:__ Palavra-chave do novo usuário. Obrigatório.
__name:__ Nome de exibição do usuário. Obrigatório.

#### RETURN: Messagem de sucesso ou alerta. json/objeto.

## /user/logout
Método: POST. Desloga o usuário.

#### RETURN: Messagem de sucesso ou alerta. json/objeto.
