const checkEmail = (req, res, next) => {
  const { email } = req.body;

  if (!email) return res.status(400).json({ message: 'O campo "email" é obrigatório' });

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isValid = regexEmail.test(email);

  if (!isValid) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }

  next();
};

module.exports = checkEmail;