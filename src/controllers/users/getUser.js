'use strict'

function getUser(request, response) {
  return  response.status(200).send({
    status: 200,
    data: [{}]
  })
}

module.exports = getUser