const express = require('express');
const { join } = require('path');
const { getData } = require('../utils/data');

const TALKER_FILE_PATH = join(__dirname, '..', 'talker.json');

const talkerRoute = express.Router();

talkerRoute.get('/', async (_req, res) => {
  const data = await getData(TALKER_FILE_PATH);
  res.status(200).json(data);
});

talkerRoute.get('/:id', async (req, res) => {
  const { id } = req.params;
  const data = await getData(TALKER_FILE_PATH);

  const filteredData = data.find((talker) => talker.id === Number(id));

  if (filteredData) {
    return res.status(200).json(filteredData);
  }

  return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
});

module.exports = talkerRoute;