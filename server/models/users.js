const db = require('./pg-config');

// CONNECT to database
db.connect(err => {
  if (err) throw err;
  // execute a query on our database
  db.query('SELECT id, user_name from api.users', (err, result) => {
    if (err) throw err;
    // LOG result to the console
    console.log(result.rows[1], "query result"); // outputs: { user_name: 'Phoebe Maio' }
    // DISCONNECT from client
    db.end(function (err) {
      if (err) throw err;
    });
  });
});
