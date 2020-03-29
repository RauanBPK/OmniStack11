const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {

    beforeEach(async () => {
        await connection.migrate.rollback();//desfaz mudancas no banco de teste. Pra limpar acho
        await connection.migrate.latest();// pra executar as migrations no banco de teste
    })

    afterAll(async () => {
        await connection.destroy();
    })

    it('should be able to create a new ONG', async () => {
        const response = await request(app).post('/ongs').send({
            name : "ONG DE TESTE",
            email: "contato@teste.com.br",
            whatsapp: "499918247442222",
            city: "Araranuga",
            uf: "SC"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
})