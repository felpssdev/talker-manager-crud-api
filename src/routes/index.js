const express = require('express');
const talkerRoute = require('./talker.route');

const rootRouter = express.Router();

rootRouter.use('/talker', talkerRoute);

module.exports = rootRouter;