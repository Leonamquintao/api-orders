const supertest = require('supertest');
const expect = require('chai').expect;
const server = require('../../../src/server');

const handleAsync = (fn) => (req, res, next) => {
  fn(req, res, next).catch((err) => next(err));
};

describe('Server Error middleware', () => {

  let request;
  
  before(() => {
    const app = server();
    request = supertest.agent(app);
  });

  it('should return a 404', async () => {
    const response = await request.get('/non-address');
    expect(response.status).to.eql(404);
  });

  it('Response should be a an array', async () => {
    const response = await request.get('/');
    expect(response).to.an('object');
  });

})