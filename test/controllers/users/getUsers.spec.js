const supertest = require('supertest');
const expect = require('chai').expect;
const server = require('../../../src/server');

describe('GET /users', () => {

  let request;
  
  before(() => {
    const app = server();
    request = supertest.agent(app);
  });

  after((done) => {
    done();
  });

  it('should return a 200', async () => {
    const response = await request.get('/users');
    expect(response.status).to.eql(200);
  });

  it('should return an array with users limited to 10', async () => {
    const response = await request.get('/users');
    expect(response.body.data.length).to.be.within(0,10);
  });
})