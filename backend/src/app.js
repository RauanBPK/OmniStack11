const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const {errors} = require('celebrate');

const app = express();

app.use(cors());
app.use(express.json()); //Para o express entender o 'body' da requisição como um JSON
app.use(routes);
app.use(errors());

/**
 * Banco: SQLite :)
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()...
 * Vamos utilizar o query builder knex
 */

module.exports = app;

