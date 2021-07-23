'use strict'

const express = require('express');
require('express-async-errors');
const compression = require('compression');
const routes = require('./routes');

function server () {

  const app = express();
  app.use(express.json());

  app.use(compression({
    level: 6,
    threshold: 100 * 1000
  }));

  app.use('/', ...routes);

  app.use(( error, request, response, next ) => {
    response.status(412);
    response.json({
      status: 'Error',
      error: error.message
    });
    next(error);
  });

  return app;
}

module.exports = server;