const router = require('express').Router()

router.get('/health-check', (request, response) => {
  return  response.status(200).send({ status: 200, message: 'api response success! '})
})

module.exports = router