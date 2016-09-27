///////////////    NODE MODULES    ///////////////
                  require('dotenv').config();
const express     = require('express');
const app         = express();
const bodyParser  = require('body-parser');
const Auth0Strategy = require('passport-auth0');
const passport = require('passport');

const strategy = new Auth0Strategy({
   domain:       'phyllio.auth0.com',
   clientID:     'sZ4HijY2TahFgeq2d2HRKld4YxD6k2UA',
   clientSecret: 'rkP-_fueImkM0y8qosiZoh31zxMlfGaKe9R2cE8_hcHzE1hz7YKzIF7BxWakVpfM',
   callbackURL:  '/callback'
  },
  function(accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    console.log(accessToken,"accessToken")
    return done(null, profile);
  }
);

passport.use(strategy);
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
app.use(passport.initialize());
app.use(passport.session());
app.get('/callback',
  passport.authenticate('auth0', { failureRedirect: '/login' }),
  function(req, res) {
    console.log(req,res, 'inside /callback')
    if (!req.user) {
      throw new Error('user null');
    }
    res.redirect("/");
  }
);

app.get('/login',
  passport.authenticate('auth0', {}), function (req, res) {
  console.log('/login', req, '-------', res);
  res.redirect("/");
});

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
