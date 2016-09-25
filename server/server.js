///////////////    NODE MODULES    ///////////////
                  require('dotenv').config();
const express     = require('express');
const app         = express();
const bodyParser  = require('body-parser');

//////////////    SERVER MODULES    //////////////

const apiApp      = require('./controllers/api/api');
const ioApp       = require('./controllers/io/io');

// **********************************    MOVE ME! **********************************
const plantsLibrary = require('./controllers/plants-library');


// MOUNT middleware
app.use(express.static('dist'));
app.use(bodyParser.json());

// API sub-app
app.use('/api', apiApp);

// PHYLLOS sub-app
app.use('/io', ioApp);

// **********************************    MOVE ME! **********************************
app.use('/plantsLibrary', plantsLibrary);


// static files route
app.get('/', (req, res) => res.redirect('/index.html'));
app.use('/static', express.static('node_modules'));

app.set('port', process.env.PORT || 8080);
app.listen(app.get('port'), () => console.log('Up and running on ' + app.get('port')));
