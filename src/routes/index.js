const express = require('express');
const talkerRoute = require('./talker.route');
const loginRoute = require('./login.route');

const rootRouter = express.Router();

rootRouter.use('/talker', talkerRoute);

rootRouter.use('/login', loginRoute);

module.exports = rootRouter;