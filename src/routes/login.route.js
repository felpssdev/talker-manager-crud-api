const express = require('express');
const crypto = require('crypto');

const loginRoute = express.Router();

loginRoute.post('/', (req, res) => {
  const { email, password } = req.body;

  const randomID = crypto.randomBytes(16).toString('ascii');

  res.status(200).json({ token: randomID });
});

module.exports = loginRoute;