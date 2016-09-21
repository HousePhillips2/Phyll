const pgp = require('pg-promise')({ //pg-promise->learn by examples: https://github.com/vitaly-t/pg-promise/wiki/Learn-by-Example#simple-select
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
