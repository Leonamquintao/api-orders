const router = require('express').Router();
const { getUser, getUsers, postUser } = require('../../controllers/users');

router.get('/users/:id', getUser);

router.get('/users', getUsers);

router.post('/users', postUser);

module.exports = router;