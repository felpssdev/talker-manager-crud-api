function checkDateValid(dateString) {
  const regexData = /^(0[1-9]|[1-2]\d|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;

  return regexData.test(dateString);
}

const checkWatchedAt = (req, res, next) => {
  const { talk } = req.body;

  if (!talk.watchedAt || !talk.watchedAt === '') {
    return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
  }

  const isDateValid = checkDateValid(talk.watchedAt);

  if (!isDateValid) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }

  next();
};

module.exports = checkWatchedAt;