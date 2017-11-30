module.exports = function (app, userModel) {

  var facebookConfig = {
    clientID     : process.env.FACEBOOK_CLIENT_ID,
    clientSecret : process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL  : process.env.FACEBOOK_CALLBACK_URL
  };

  var bcrypt = require("bcrypt-nodejs");

  var passport = require('passport');
  var LocalStrategy = require('passport-local').Strategy;
  var FacebookStrategy = require('passport-facebook').Strategy;

  passport.use(new LocalStrategy(localStrategy));
  passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));

  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);

  app.post('/api/login', passport.authenticate('local'), login);
  app.post('/api/logout', logout);
  app.post('/api/register', register);
  app.post ('/api/loggedIn', loggedin);
  app.get ('/facebook/login', passport.authenticate('facebook', { scope : 'email' }));
  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
      successRedirect: '/profile',
      failureRedirect: '/login'
    }));

  app.get('/api/user', findUser);
  app.post('/api/user', createUser);
  app.get('/api/user/:userId', findUserById);
  app.put('/api/user/:userId', updateUser);
  app.delete('/api/user/:userId', deleteUser);

  function serializeUser(user, done) {
    done(null, user);
  }

  function deserializeUser(user, done) {
    userModel
      .findUserById(user._id)
      .then(
        function (user) {
          done(null, user);
        },
        function (err) {
          done(err, null);
        }
      );
  }

  function localStrategy(username, password, done) {
    userModel
      .findUserByUsername(username)
      .then(
        function (user) {
          if (user.userName === username
            && bcrypt.compareSync(password, user.password)) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        },
        function (err) {
          if (err) {
            return done(err);
          }
        }
      );
  }

  function login(req, res) {
    console.log(req.user);
    var user = req.user;
    res.json(user);
  }

  function logout(req, res) {
    req.logOut();
    res.send(200);
  }

  function register(req, res) {
    var user = req.body;
    user.password = bcrypt.hashSync(user.password);
    userModel
      .createUser(user)
      .then(
        function (user) {
          if (user) {
            req.login(user, function (err) {
              if (err) {
                res.status(400).send(err);
              } else {
                res.json(user);
              }
            });
          }
        }
      );
  }

  function loggedin(req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');
  }

  function facebookStrategy(token, refreshToken, profile, done) {
    userModel
      .findUserByFacebookId(profile.id)
      .then(function(user) {
          if(user) {
            return done(null, user);
          } else {
            var names = profile.displayName.split(" ");
            var newFacebookUser = {
              firstName:  names[0],
              lastName:  names[1],
              facebook: {
                id:    profile.id,
                token: token
              },
              email: profile.emails[0].value
            };
            userModel
              .createUser(newFacebookUser)
              .then(function (user) {
                return done(null, user);
              });
          }
        },
        function(err) {
          if (err) { return done(err); }
        });
  }

  function findUserByCredentials(req, res) {
    var userName = req.query['userName'];
    var password = bcrypt.hashSync(req.query['password']);
    userModel
      .findUserByCredentials(userName, password)
      .then(function (user) {
        if (user) {
          res.json(user);
        } else {
          res.sendStatus(404);
        }
      }, function (err) {
        res.status(500).send(err);
      });
  }

  function findUserByUsername(req, res) {
    var userName = req.query['userName'];
    userModel
      .findUserByUserName(userName)
      .then(function (user) {
        if (user) {
          res.json(user);
        } else {
          res.sendStatus(404);
        }
      }, function (err) {
        res.status(500).send(err);
      });
  }

  function findUser(req, res) {
    var userName = req.query['userName'];
    var password = bcrypt.hashSync(req.query['password']);
    if (userName && password) {
      findUserByCredentials(req, res);
    } else if (userName) {
      findUserByUsername(req, res);
    }
  }

  function createUser(req, res) {
    var user = req.body;
    userModel
      .createUser(user)
      .then(function (user) {
        if (user) {
          res.json(user);
        }
      }, function (err) {
        res.status(500).send(err);
      });
  }

  function findUserById(req, res) {
    var userId = req.param('userId');
    userModel
      .findUserById(userId)
      .then(function (user) {
        res.json(user);
      }, function (err) {
        res.status(500).send(err);
      })
  }

  function updateUser(req, res) {
    var userId = req.param('userId');
    var user = req.body;
    userModel
      .updateUser(userId, user)
      .then(function (resp) {
        if (resp.ok === 1 && resp.n === 1) {
          userModel
            .findUserById(userId)
            .then(function (user) {
              res.json(user);
            }, function (err) {
              res.status(404).send(err);
            })
        }
      }, function (err) {
        res.status(500).send(err);
      });
  }

  function deleteUser(req, res) {
    var userId = req.param('userId');
    userModel
      .deleteUser(userId)
      .then(function (resp) {
        res.sendStatus(200);
      }, function (err) {
        res.status(500).send(err);
      });
  }
};
