const connection = require('../database/connection');
const crypto = require('crypto');
 /**
  * Tipos de parametros
  * 
  * Query Params: Parametro nomeado apos '?' (Filtro, Paginação)
  * Route Params: Parametro p/ identificar recursos /users/:id
  * Request Body: Corpo da requisição - Criar ou alterar recursos 
  */
module.exports = {
    async index(req,res){
        const ongs = await connection('ongs').select('*');
        return res.json(ongs);
    },

    async create(req,res){

        const {name, email, whatsapp, city, uf} = req.body; //Body params - POST?

        const id = crypto.randomBytes(4).toString('HEX');
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });

        return res.json({ id });
    }
}