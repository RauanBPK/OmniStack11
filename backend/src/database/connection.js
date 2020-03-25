const knex = require('knex');
const configuration = require('../../knexfile');

// Cria uma conexão com o bd a partir do knexfile
const connection = knex(configuration.development);

module.exports = connection;