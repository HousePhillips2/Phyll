///////////////    NODE MODULES    ///////////////
                  require('dotenv').config();
const express     = require('express');
const app         = express();
const http        = require('http').Server(app);
const io          = require('socket.io')(http);
const bodyParser  = require('body-parser');
const Auth0Strategy = require('passport-auth0');
const passport    = require('passport');
const session     = require ('express-session');
const apiai       = require('apiai');
const botsFamily  = {
  happy : apiai('8fe112573eca466893d8ff19b6d7c771')
/*thirsty: apiai('.....') to be implemented
  drowning: ...
  dark: ...
  burnt: ...
*/
};

//will refactor into subApp later
//api call to fetch plant status
let plantbot = botsFamily.happy;//diverse plantbot endpoint based on plant status (i.e. happy, thirsty, drowning, burnt, dark)
io.on('connection', function(socket){
  io.emit('login','Hello');
  //**********response back to front-end
  socket.on('client', function(msg){
    const request = plantbot.textRequest(msg);
    request.on('response', function(response) {
      //console.log(response.result.fulfillment.speech,'response from happybot');
      io.emit('plant',response.result.fulfillment.speech);
    });
    request.on('error', function(error) {
        console.log(error);
    });
    request.end();
  });
});

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
const vendorApp   = require('./controllers/vendor/vendor');

// **********************************    MOVE ME! **********************************
// const plantsLibrary = require('./controllers/api/plants-library');

// MOUNT middleware
app.use(express.static('dist'));
app.use(bodyParser.json());


// API sub-app
app.use('/api', apiApp);

// PHYLLOS sub-app
app.use('/io', ioApp);

// VENDOR sub-app
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

// **********************************    MOVE ME! **********************************
// app.use('/plantsLibrary', plantsLibrary);


// static files route
app.get('/', (req, res) => res.redirect('/index.html'));
app.use('/static', express.static('node_modules'));
app.use('/images', express.static('src/images'));
app.use('/glyphs', express.static('src/glyphs'));


let port = process.env.PORT || 8080;
http.listen(port, function(){
  console.log('Up and running on ' + port);
});
