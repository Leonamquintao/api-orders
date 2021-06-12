const router = require('express').Router()
const getHealthCheck = require('../../controllers/info/getHealthCheck')

router.get('/health-check', getHealthCheck)

module.exports = router