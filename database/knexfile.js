const dotenv = require('dotenv');
dotenv.config();

const { DB_HOST, DB_NAME, DB_USER_NAME, DB_USER_PASSWORD } = process.env;

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host:     DB_HOST,
      database: DB_NAME,
      user:     DB_USER_NAME,
      password: DB_USER_PASSWORD,
      charset: 'utf8'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
