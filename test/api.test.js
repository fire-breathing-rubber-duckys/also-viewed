const request = require('supertest');
const app = require('../server/index');

describe('API Tests', () => {
  it('Should get a response given a GET top-picks', () => {
    return request(app)
      .get('/api/top-picks/fetch')
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });

  it('Should get a response given a GET ultimately-bought', () => {
    return request(app)
      .get('/api/ultimately-bought/fetch')
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });

  it('Should get a response given a GET ultimately-bought/fetch-all', () => {
    return request(app)
      .get('/api/ultimately-bought/fetch-all')
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});