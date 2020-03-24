const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json()); //Para o express entender o 'body' da requisição como um JSON
app.use(routes);

/**
 * Banco: SQLite :)
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()...
 * Vamos utilizar o query builder knex
 */

app.listen(3332);

