const express = require('express');
const { join } = require('path');
const { getData, saveNewObject, getById, updateObject, deleteObject } = require('../utils/data');
const checkToken = require('../middlewares/checkToken');
const checkName = require('../middlewares/checkName');
const checkAge = require('../middlewares/checkAge');
const checkTalk = require('../middlewares/checkTalk');
const checkWatchedAt = require('../middlewares/checkWatchedAt');
const checkRate = require('../middlewares/checkRate');

const TALKER_FILE_PATH = join(__dirname, '..', 'talker.json');

const talkerRoute = express.Router();

talkerRoute.get('/', async (_req, res) => {
  const data = await getData(TALKER_FILE_PATH);
  res.status(200).json(data);
});

talkerRoute.get('/search', checkToken, async (req, res) => {
  const { q } = req.query || '';

  const data = await getData(TALKER_FILE_PATH);

  const filteredData = data.filter((talker) => talker.name.toLowerCase().includes(q.toLowerCase()));

  res.status(200).json(filteredData);
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

talkerRoute.delete('/:id', checkToken, async (req, res) => {
  const { id } = req.params;

  await deleteObject(TALKER_FILE_PATH, id);

  res.status(204).end();
});

talkerRoute.use(checkToken, checkName, checkAge, checkTalk, checkWatchedAt, checkRate);

talkerRoute.post('/', async (req, res) => {
  const newTalker = req.body;

  const savedTalker = await saveNewObject(TALKER_FILE_PATH, newTalker);

  res.status(201).json(savedTalker);
});

talkerRoute.put('/:id', async (req, res) => {
  const { id } = req.params;
  const newTalker = req.body;

  const talkerToUpdate = await getById(TALKER_FILE_PATH, id);

  if (talkerToUpdate === undefined) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }

  const savedTalker = await updateObject(TALKER_FILE_PATH, id, newTalker);

  res.status(200).json(savedTalker);
});

module.exports = talkerRoute;