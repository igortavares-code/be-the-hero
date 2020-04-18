const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * Rota / Recurso
 */
/**
 * Métodos HTTP: 
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?", servem para filtros, paginação...
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos 
  */
 /**
  * SQL: Mysql, SQLite, PostgreeSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, COUCHDB, etc
  */
/**
 * Driver: Select * from users (pacote oficial do bd pra node)
 * Query builder: table('users').select('*').where() (javascript)
 * 
 */


app.listen(3334);

