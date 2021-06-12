'use strict'

function getHealthCheck(request, response) {
  return  response.status(200).send({
    status: 200,
    message: 'api response success!'
  })
}

module.exports = getHealthCheck