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

const filterByDateQuery = (req, res, next) => {
  const { date } = req.query;
  const data = req.filteredData;

  if (date) {
    const isValid = checkDateValid(date);

    if (!isValid) {
      return res
        .status(400).json({ message: 'O parâmetro "date" deve ter o formato "dd/mm/aaaa"' });
    }

    req.filteredData = data
      .filter((obj) => obj.talk.watchedAt.toLowerCase().includes(date.toLowerCase()));
  }

  next();
};

module.exports = {
  checkWatchedAt,
  filterByDateQuery,
};