///////////////    NODE MODULES    ///////////////
const express = require('express');
const router  = express.Router();
const Auth0Strategy = require('passport-auth0');
const passport = require('passport');
const session = require ('express-session');
const strategy = new Auth0Strategy({
   domain:       process.env.AUTH_DOMAIN,
   clientID:     process.env.AUTH_CLIENT_ID,
   clientSecret: process.env.AUTH_CLIENTSECRET,
   callbackURL:  '/callback'
  },
  function(accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
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

router.get('/login',
  passport.authenticate('auth0', {}), (req, res) => {
  // console.log('redirected!');
  res.redirect("/");
});

router.get('/logout', (req, res) => {
  req.logout();
  res.send('success logout!');
});

router.get('/loggedin', (req,res) => {
  // console.log(req.session.passport,'passport');
  if(req.session.passport!==undefined){
    if(req.session.passport.user !==undefined){
      // console.log(req.user._json,'user info');
      let user_obj={name: req.user._json.name, img: req.user._json.picture_large};
      res.send(req.user._json);
    } else {
      res.send(false);
    }
  } else {
    res.send(false);
  }

});


module.exports = router;
