const express = require('express');

const routes = express.Router();

/**
 * GET - Buscar
 * POST - Criar
 * PUT - Alterar
 * DELETE - Deletar
 */

 /**
  * Tipos de parametros
  * 
  * Query Params: Parametro nomeado apos '?' (Filtro, Paginação)
  * Route Params: Parametro p/ identificar recursos /users/:id
  * Request Body: Corpo da requisição - Criar ou alterar recursos 
  */
routes.post('/users', (req, res) => {
    //const Qparams = req.query; //Query params - Passados na rota. Ex: /users?name=Rauan&Idade=23
    //const Rparams = req.params; //Route params - Passados na rota. Ex: /users/1
    const Bparams = req.body; //Body params - POST?
    //console.log(Qparams)
    //console.log(Rparams)
    console.log(Bparams)

    return res.json({
        evento: 'Semana OmniStack 11',
        aluno: 'Rauan Pires'
    });
})

module.exports = routes;