'use strict'

const supertest = require('supertest')
const server = require('../../../src/server')

describe('/health-check', () => {

  let request
  
  before(() => {
    const app = server()
    request = supertest.agent(app)
  })

  it('should return a 200', () => {
    return request.get('/health-check').expect(200)
  })
})