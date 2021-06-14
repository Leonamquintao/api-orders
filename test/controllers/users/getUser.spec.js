'use strict'

const supertest = require('supertest')
const expect = require('chai').expect
const server = require('../../../src/server')

describe('GET /user', () => {

  let request
  
  before(() => {
    const app = server()
    request = supertest.agent(app)
  })

  it('should return a 200', async () => {
    const response = await request.get('/user')
    expect(response.status).to.eql(200)
  })

  it('should return an array with 1 object', async () => {
    const response = await request.get('/user')
    expect(response.body.data.length).to.eql(1)
  })
})