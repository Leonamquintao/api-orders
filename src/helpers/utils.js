const assert = require('assert');
const moment = require('moment');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const { v4: uuidv4 } = require('uuid');

const dotenv = require('dotenv');
dotenv.config();

const verifyToken = async (request, response, next) => {

  assert(process.env.API_SECRET, 'API_SECRET is required!')
  const bearerHeader = request.headers['authorization']

  if(typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ')
    const token = bearer[1]

    if(!token) return response.status(401).send({ status: 401, auth: false, message: 'No token provided.'})

    return jwt.verify(token, process.env.API_SECRET, (err, decoded) => {
      if(err) return response.status(500).send({ status: 500, auth: false, message: 'Failed to authenticate token.' })
      next()
    })

  } else {
    response.status(403).send({
      status: 403,
      message: 'Ops (403) Forbidden'
    })
  }
}

const generateToken = async (email) => {
  try {
    return jwt.sign({
      email: email
    }, process.env.API_SECRET)

  } catch(err) {
    console.log(err)
    return err
  }
}

const generateUuid = async () => {
  const uuid = uuidv4();
  return uuid;
}

const generateHash = async (info) => {
  try {
    return bcrypt.hashSync(info, salt)
  } catch(err) {
    console.log(err)
    return err
  }
}

const passwordVerify =  async (password, hash) => {
  const result = bcrypt.compareSync(password, hash)
  return result
}

module.exports = {
  verifyToken,
  generateUuid,
  passwordVerify,
  generateToken,
  generateHash
}