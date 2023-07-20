const express = require('express');
const crypto = require('crypto');
const checkPassword = require('../middlewares/checkPassword');
const checkEmail = require('../middlewares/checkEmail');

const loginRoute = express.Router();

loginRoute.use(checkEmail, checkPassword);

loginRoute.post('/', (req, res) => {
  // const { email, password } = req.body;

  const randomID = crypto.randomBytes(16).toString('ascii');

  res.status(200).json({ token: randomID });
});

module.exports = loginRoute;