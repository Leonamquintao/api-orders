const knex = require('../../../database/database');

async function getUser(request, response, next) {
  try {
    const id = request.params.id;
    const user = await knex('users').where('id', id).first();
    return  response.status(200).send({
      status: 200,
      data: [user]
    });
  } catch (err) {
    next(err);
  }
}

module.exports = getUser;