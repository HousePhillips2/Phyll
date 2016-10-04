///////////////    NODE MODULES    ///////////////
                  require('dotenv').config();
const express     = require('express');
const app         = express();
const http        = require('http').Server(app);
const bodyParser  = require('body-parser');
const Auth0Strategy = require('passport-auth0');
const passport    = require('passport');
const session     = require ('express-session');
const io          = require('socket.io').listen(http);
                    require('./controllers/api/chatbot.js')(io);

// MOUNT middleware
app.use(express.static('dist'));
app.use(bodyParser.json());

//Authentication middleware
app.use(session({
  secret: 'jelly beans many fingers',
  resave: true,
  cookie: {maxAge: 30000000},
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());


//////////////    SERVER MODULES    //////////////

const apiApp      = require('./controllers/api/api');
const ioApp       = require('./controllers/io/io');
<<<<<<< 48d4e8a00f0afcd4d8678dcfe26628fc66986d3c

//const vendorApp   = require('./controllers/vendor/vendor');
=======
const vendorApp   = require('./controllers/vendor/vendor');
>>>>>>> [refactor] add auth api into vendor subApp


// const vendorApp   = require('./controllers/vendor/vendor');
const postgresApp = require('./controllers/postgres/postgres');


// MOUNT middleware
app.use(express.static('dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// API sub-app
app.use('/api', apiApp);

// PHYLLOS sub-app
app.use('/io', ioApp);

// VENDOR sub-app
// app.use('/vendor', vendorApp);

// POSTGRES sub-app
app.use('/postgres', postgresApp);


app.use('/vendor', vendorApp);


//auth0 call back route
app.get('/callback',
  passport.authenticate('auth0', { failureRedirect: '/login' }),
  function(req, res) {
    if (!req.user) {
      throw new Error('user null');
    }
    res.redirect("/");
  }
);

// static files route
app.get('/', (req, res) => res.redirect('/index.html'));
app.use('/static', express.static('node_modules'));
app.use('/images', express.static('src/images'));
app.use('/glyphs', express.static('src/glyphs'));


let port = process.env.PORT || 8080;
http.listen(port, function(){
  console.log('Up and running on ' + port);
});
