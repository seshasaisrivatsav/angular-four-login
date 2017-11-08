module.exports = function (app) {
  var passport = require('passport');
  var LocalStrategy = require('passport-local').Strategy;
  passport.use(new LocalStrategy(localStrategy));
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);

  var userModel = require('../models/user.model.server');

  app.post('/api/register', register);
  app.post('/api/login', passport.authenticate('local'), login);
  app.post('/api/loggedIn', loggedIn);
  app.post('/api/logout', logout);

  function logout(req, res) {
    req.logOut();
    res.send(200);
  }

  function loggedIn(req, res) {
    if(req.isAuthenticated()) {
      res.json(req.user);
    } else {
      res.send('0');
    }
  }

  function register(req, res) {
    var user = req.body;
    userModel
      .createUser(user)
      .then(
        function(user){
          if(user){
            req.login(user, function(err) {
              if(err) {
                res.status(400).send(err);
              } else {
                res.json(user);
              }
            });
          }
        },
        function (err) {
          console.log(err);
        }
    );
  }
  function login(req, res) {
    res.json(req.user);
  }

  function serializeUser(user, done) {
    done(null, user);
  }
  function deserializeUser(user, done) {
    userModel
      .findDeveloperById(user._id)
      .then(
        function(user){
          done(null, user);
        },
        function(err){
          done(err, null);
        }
      );
  }
  function localStrategy(username, password, done) {
    userModel
      .findUserByCredentials(username, password)
      .then(
        function(user) {
          if(user.username === username && user.password === password) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        },
        function(err) {
          if (err) { return done(err); }
        }
      );
  }

};
