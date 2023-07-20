const validateRate = (rate) => {
  if (rate < 1 || rate > 5 || !Number.isInteger(rate)) {
    return false;
  }

  return true;
};

const checkRate = (req, res, next) => {
  const { talk } = req.body;

  if (talk.rate === undefined) {
    return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
  }

  const isValid = validateRate(talk.rate);

  if (!isValid) {
    return res.status(400).json({
      message: 'O campo "rate" deve ser um número inteiro entre 1 e 5',
    });
  }

  next();
};

const checkBodyRate = (req, res, next) => {
  const { rate } = req.body;

  if (rate === undefined) {
    return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
  }

  const isValid = validateRate(rate);

  if (!isValid) {
    return res.status(400).json({
      message: 'O campo "rate" deve ser um número inteiro entre 1 e 5',
    });
  }

  next();
};

const filterByRateQuery = (req, res, next) => {
  const { rate } = req.query;
  const data = req.filteredData;

  if (rate) {
    const isValid = validateRate(Number(rate));

    if (!isValid) {
      return res.status(400).json({
        message: 'O campo "rate" deve ser um número inteiro entre 1 e 5',
      });
    }

    req.filteredData = data.filter((talker) => talker.talk.rate === Number(rate));
  }

  next();
};

module.exports = {
  checkRate,
  filterByRateQuery,
  checkBodyRate,
};