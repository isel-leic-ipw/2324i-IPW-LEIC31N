const request = require('supertest');
const app = require('../app');

describe('Testando a API de utilizador', () => {
  it('Deve criar um novo utilizador', async () => {
    const res = await request(app)
      .post('/api/utilizadores')
      .send({
        nome: 'Teste',
        email: 'teste@teste.com',
        senha: '123456'
      });
    expect(res.statusCode).toEqual(201);
  });
});