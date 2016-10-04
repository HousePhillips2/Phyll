///////////////    NODE MODULES    ///////////////
const express = require('express');
const router  = express.Router();
const Auth0Strategy = require('passport-auth0');
const passport = require('passport');
const session = require ('express-session');
const db = require('../../models/pg-config.js');
const insertUser = require('../../models/users.js');
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
  passport.authenticate('auth0', {
    socialButtonStyle: 'big',
    icon: 'https://phyll-dev.herokuapp.com/images/logo.png'
  }), (req, res) => {
  res.redirect("/");
});

router.get('/logout', (req, res) => {
  req.logout();
  res.send('success logout!');
});

router.get('/loggedin', (req,res) => {
  if(req.user !==undefined){
    //console.log(req.session.passport.user)
    let user_obj={
      fb_id: req.user.id.slice(9), 
      first_name: req.user._json.given_name, 
      last_name: req.user._json.family_name,
      nickname: req.user._json.nickname, 
      img: req.user._json.picture_large, 
      timezone:req.user._json.timezone
    };
    insertUser(user_obj, (updated_user_obj) => {
      console.log(updated_user_obj); // update user_obj with user id from users table, which will be used for add plant
    }); 
  } else {
    res.send(false);
  }
  
});


module.exports = router;