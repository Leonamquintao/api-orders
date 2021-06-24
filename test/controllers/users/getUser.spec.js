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
    expect(response.body.data).to.an('array')
    expect(response.body.data.length).to.eql(1)
  })

  it('Expects to the object brought has id, name, email, birth date and document', async () => {

    const response = await request.get('/user')
    const data = response.body.data[0]
  
    expect(data).to.have.property('id')
      .to.be.a.a('string').with.lengthOf(36)
    expect(data).to.have.property('name')
      .to.be.a.a('string')
    expect(data).to.have.property('email')
      .to.be.a.a('string').that.does.include('@')
    expect(data).to.have.property('birth_date')
      .to.be.a('string')
    expect(data).to.have.property('document')
      .to.be.a.a('string')
  })
})