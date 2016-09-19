const pg = require('pg'); //may consider using pg-promise https://github.com/vitaly-t/pg-promise/wiki/Learn-by-Example

// instantiate a new client
// the client will read connection information from
// the same environment variables used by postgres cli tools
const client = new pg.Client({
  user: 'wkuxiucjtyzzuc',
  password: 'kBz9XixE8joEqMGOoGPcZt_R7h',
  database: 'd8ju6srcedbq7g',
  host: 'ec2-54-221-253-87.compute-1.amazonaws.com',
  port: 5432,
  ssl: true
});

// connect to our database
client.connect(function (err) {
  if (err) throw err;

  // execute a query on our database
  client.query('SELECT id, user_name from api.users', function (err, result) {
    if (err) throw err;

    // just print the result to the console
    console.log(result.rows[1]); // outputs: { user_name: 'Phoebe Maio' }

    // disconnect the client
    client.end(function (err) {
      if (err) throw err;
    });
  });
});