///////////////    NODE MODULES    ///////////////
                      require('dotenv').config();
const express       = require('express');
const app           = express();
const partials      = require('express-partials');
const session       = require('express-session');
const bodyParser    = require('body-parser');
const http          = require('http');
const fs            = require('fs');
//////////////    SERVER MODULES    //////////////
// TODO: CONSIDER using pg-promise:
// https://github.com/vitaly-t/pg-promise/wiki/Learn-by-Example
const db            = require('./models/pg-config');
const mdb           = require('./models/mdb-config.js');
const garden        = require('./controllers/garden');
const plantFacts    = require('./controllers/plant-facts');
const plantData     = require('./controllers/plant-data');
const scrape        = require('./helpers/scrape');


// MOUNT middleware
app.use(express.static('dist'));
app.use(bodyParser.json());

app.get('/', (req, res) => res.redirect('/index.html'));
app.use('/garden', garden);
app.use('/plantData', plantData);
app.use('/plantFacts', plantFacts);
app.get('/gather', (req, res) => {scrape(res);});
app.use('/plantInput', plantData);


app.set('port', process.env.PORT || 8080);
app.listen(app.get('port'), () => console.log('Up and running on ' + app.get('port')));




