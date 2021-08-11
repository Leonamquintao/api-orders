const knex = require('../../../database/database');

async function getUser(request, response) {
  try {
    const id = request.params.id;
    const user = await knex('users').where('id', id).first();
    return  response.status(200).send({
      status: 200,
      data: [user]
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = getUser;