///////////////    NODE MODULES    ///////////////
const express = require('express');
const router  = express.Router();
const Auth0Strategy = require('passport-auth0');
const passport = require('passport');
const session = require ('express-session');


// const strategy = new Auth0Strategy({
//    domain:       'phyllio.auth0.com',
//    clientID:     'sZ4HijY2TahFgeq2d2HRKld4YxD6k2UA',
//    clientSecret: 'rkP-_fueImkM0y8qosiZoh31zxMlfGaKe9R2cE8_hcHzE1hz7YKzIF7BxWakVpfM',
//    callbackURL:  '/callback'
//   },
//   (accessToken, refreshToken, extraParams, profile, done) => {
//     // accessToken is the token to call Auth0 API (not needed in the most cases)
//     // extraParams.id_token has the JSON Web Token
//     // profile has all the information from the user
//     console.log('loggedin user name: ',profile.displayName);
//     return done(null, profile);
//   }
// );

// router.use(session({
//   secret: 'jelly beans many fingers',
//   resave: true,
//   cookie: {maxAge: 30000000},
//   saveUninitialized: true
// }));

// passport.use(strategy);
// passport.serializeUser((user, done) => {
//   done(null, user);
// });

// passport.deserializeUser((user, done) => {
//   done(null, user);
// });
// router.use(passport.initialize());
// router.use(passport.session());
// router.get('/callback',
//   passport.authenticate('auth0', { failureRedirect: '/login' }),
//   (req, res) => {
//     if (!req.user) {
//       throw new Error('user null');
//     }
//     res.redirect("/");
//   }
// );

router.get('/login',
  passport.authenticate('auth0', {}), (req, res) => {
  res.redirect("/");
});

router.get('/logout', (req, res) => {
  req.logout();
  //res.redirect('/');
  res.send('success logout!');
});

router.get('/loggedin', (req,res) => {
  //console.log(req.session.passport,'passport')
  if(req.session.passport!==undefined){
    if(req.session.passport.user !==undefined){
      //console.log(req.user._json.picture,'user info');
      let user_obj={name: req.user._json.name, img: req.user._json.picture};
      res.send(user_obj);
    } else {
      res.send(false);
    }
  } else {
    res.send(false);
  }
  
});



module.exports = router;