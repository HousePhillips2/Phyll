const pg = require('pg'); //may consider using pg-promise https://github.com/vitaly-t/pg-promise/wiki/Learn-by-Example

// instantiate a new client
// the client will read connection information from
// the same environment variables used by postgres cli tools

const db = new pg.Client({
  user: process.env.HEROKU_PG_USER,
  password: process.env.HEROKU_PG_PW,
  database: process.env.HEROKU_PG_DB,
  host: process.env.HEROKU_PG_HOST,
  port: 5432,
  ssl: true
});

module.exports = db;
