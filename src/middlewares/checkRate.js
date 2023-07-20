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

const checkRateQuery = (req, res, next) => {
  const { rate } = req.query;

  if (rate) {
    const isValid = validateRate(Number(rate));

    if (!isValid) {
      return res.status(400).json({
        message: 'O campo "rate" deve ser um número inteiro entre 1 e 5',
      });
    }
  }

  next();
};

module.exports = {
  checkRate,
  checkRateQuery,
};