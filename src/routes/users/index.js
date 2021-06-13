const router = require('express').Router()
const { getUser, getUsers } = require('../../controllers/users') 

router.get('/user', getUser)

router.get('/users', getUsers)

module.exports = router