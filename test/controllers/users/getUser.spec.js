'use strict'

const supertest = require('supertest')
const server = require('../../../src/server')

describe('/user', () => {

  let request
  
  before(() => {
    const app = server()
    request = supertest.agent(app)
  })

  it('should return a 200', () => {
    return request.get('/user').expect(200)
  })
})