
///////////////    NODE MODULES    ///////////////
                  require('dotenv').config();
const express     = require('express');
const app         = express();
const http        = require('http').Server(app);
const io          = require('socket.io')(http);
const bodyParser  = require('body-parser');
const Auth0Strategy = require('passport-auth0');
const passport = require('passport');
const session = require ('express-session');

//will refactor into subApp later
io.on('connection', function(socket){
  io.emit('login','Hello');
  socket.on('client', function(msg){
    console.log(msg);
    if (msg ==='hello') {
      io.emit('plant', 'What a wonderful day!');
    } else if (msg ==='who are you?') {
      io.emit('plant', 'I\'m your plant Meow-Meow!');
    } else if (msg === 'how are you?') {
      io.emit('plant', 'I am a little bit thirsty, could you water me?');
    } else if (msg === 'are you a robot?') {
      io.emit('plant', 'No, I am not!');
    } else {
      io.emit('plant', 'I don\'t understand you');
    }
    
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

// **********************************    MOVE ME! **********************************
// const plantsLibrary = require('./controllers/api/plants-library');

// MOUNT middleware
app.use(express.static('dist'));
app.use(bodyParser.json());


// API sub-app
app.use('/api', apiApp);

// PHYLLOS sub-app
app.use('/io', ioApp);

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

//app.set('port', process.env.PORT || 8080);
//app.listen(app.get('port'), () => console.log('Up and running on ' + app.get('port')));
let port = process.env.PORT || 8080;
http.listen(port, function(){
  console.log('Up and running on ' + port);
});

