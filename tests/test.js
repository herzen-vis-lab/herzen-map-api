//tests/test.js
const request = require('supertest');
const app = require('../server');

describe('GET /', () => {
  it('responds with json', async () => {
    //const response = await request(app).get('api/point/id/b43b8101-a37e-45e6-882a-763187c1490e');
    const response = await request(app).get('');
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.body).toMatchObject({message:'API работает, Адрес swagger /api/docs.'});	  
  });
});

