'use strict'

function getUsers(request, response) {
  return  response.status(200).send({
    status: 200,
    data: []
  })
}

module.exports = getUsers