const pgp = require('pg-promise')({
    // Initialization Options
});
const connection = {
  user: process.env.HEROKU_PG_USER,
  password: process.env.HEROKU_PG_PW,
  database: process.env.HEROKU_PG_DB,
  host: process.env.HEROKU_PG_HOST,
  port: 5432,
  ssl: true
};
const db = pgp(connection);

module.exports = db;
