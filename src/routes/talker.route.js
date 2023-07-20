const express = require('express');
const { join } = require('path');
const { getData } = require('../utils/data');

const TALKER_FILE_PATH = join(__dirname, '..', 'talker.json');

const talkerRoute = express.Router();

talkerRoute.get('/', async (req, res) => {
  const data = await getData(TALKER_FILE_PATH);
  res.status(200).json(data);
});

module.exports = talkerRoute;