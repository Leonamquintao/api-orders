const knex = require('../../../database/database');

async function getUsers(request, response, next) {
  try {
    const users = await knex('users');
    return  response.status(200).send({
      status: 200,
      data: users
    });
  } catch (err) {
    next(err);
  }
}

module.exports = getUsers;