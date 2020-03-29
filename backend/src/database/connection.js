const knex = require('knex');
const configuration = require('../../knexfile');

const config = process.env.NODE_ENV == 'test' ? configuration.test : configuration.development; //Pra saber se esta em abiente de teste pra mudar o db pro de test

// Cria uma conexão com o bd a partir do knexfile
const connection = knex(config);

module.exports = connection;