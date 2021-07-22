'use strict';

async function createDatabase() {
  const knexfile = require('./knexfile');
  const config = require(process.cwd() + knexfile.development);
  const dotenv = require('dotenv');
  dotenv.config();

  config.connection.database = null;
  const knex = require('knex')(config);

  const {  DB_NAME } = process.env;

  await knex.raw(`CREATE DATABASE ${DB_NAME}`);
  await knex.destroy();
}

createDatabase();