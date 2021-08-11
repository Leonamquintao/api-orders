const knex = require('../../../database/database');
const { generateToken, generateUuid, generateHash } = require('../../helpers/utils');

async function postUser(request, response, next) {
  try {
    const payload = request.body;
    
    const user = {
      id: await generateUuid(),
      full_name: payload.full_name.toUpperCase(),
      email: payload.email,
      token: await generateToken(payload.email),
      password: await generateHash(payload.password),
      document: payload.document.replace(/\D/g,''),
      birth_date: payload.birth_date
    }

    await knex('users').insert(user);

    return  response.status(200).send({
      status: 201,
      data: user
    });

  } catch (err) {
    next(err);
  }

}

module.exports = postUser;