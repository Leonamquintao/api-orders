'use strict'

const supertest = require('supertest');
const expect = require('chai').expect;
const server = require('../../../src/server');

describe('GET /health-check', () => {

  let request;
  
  before(() => {
    const app = server();
    request = supertest.agent(app);
  })

  it('should return a 200', async () => {
    const response = await request.get('/health-check');
    expect(response.status).to.eql(200);
  })
})