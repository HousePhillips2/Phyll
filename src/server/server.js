                      require('dotenv').config();
const express       = require('express');
const app           = express();
const partials      = require('express-partials');
const session       = require('express-session');
const bodyParser    = require('body-parser');
const http          = require('http');
const fs            = require('fs');
const chai          = require('chai'); // sitepoint.com/unit-test-javascript-mocha-chai/

const port          = process.env.PORT||8080;

app.listen(port);
console.log('Up and running on ' + port);

app.use(express.static('src/public'));

app.get('/', (req, res) => res.redirect('/index.html'));