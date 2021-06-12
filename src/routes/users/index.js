const router = require('express').Router()
const getUser = require('../../controllers/users/getUser') 

router.get('/user', getUser)

module.exports = router