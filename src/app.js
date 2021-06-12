const express = require('express')
const compression = require('compression')
const routes = require('./routes')

const app = express()

app.use(express.json())

app.use(compression({
  level: 6,
  threshold: 100 * 1000
}))

app.use('/', ...routes)

module.exports = app