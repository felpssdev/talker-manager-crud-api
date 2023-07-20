const { join } = require('path');
const { getData } = require('../utils/data');

const TALKER_FILE_PATH = join(__dirname, '..', 'talker.json');

const checkName = (req, res, next) => {
  const { name } = req.body;

  if (!name) return res.status(400).json({ message: 'O campo "name" é obrigatório' });

  if (name.length < 3) {
    return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }

  next();
};

const filterByNameQuery = async (req, _res, next) => {
  const { q } = req.query;

  const nameQuery = q || '';

  const data = await getData(TALKER_FILE_PATH);

  const filteredData = data
    .filter((talker) => talker.name.toLowerCase().includes(nameQuery.toLowerCase()));

  req.filteredData = filteredData;

  next();
};

module.exports = {
  checkName,
  filterByNameQuery,
};