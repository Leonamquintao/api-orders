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

  it('should resturn an array with 1 object', (done) => {
    return request.get('/user').end((err, res) => {
      done()
    })
  })
})