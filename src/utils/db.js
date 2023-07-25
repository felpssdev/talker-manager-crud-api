const mysql = require('mysql2/promise');

const connect = mysql.createPool({
  host: process.env.MYSQL_HOSTNAME,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const getDataFromDb = async () => {
  const [result] = await connect.execute('SELECT * FROM talkers');

  const talkers = result.map((talker) => ({
    name: talker.name,
    age: talker.age,
    id: talker.id,
    talk: {
      watchedAt: talker.talk_watched_at,
      rate: talker.talk_rate,
    },
  }));

  return talkers;
};

module.exports = getDataFromDb;