module.exports = function (app, userModel) {

  app.get('/api/user', findUser);
  app.post('/api/user', createUser);
  app.get('/api/user/:userId', findUserById);
  app.put('/api/user/:userId', updateUser);
  app.delete('/api/user/:userId', deleteUser);

  function findUserByCredentials(req, res) {
    var userName = req.query['userName'];
    var password = req.query['password'];
    userModel
      .findUserByCredentials(userName, password)
      .then(function(user){
        if(user){
          res.json(user);
        } else {
          res.sendStatus(404);
        }
      }, function(err) {
        res.status(500).send(err);
      });
  }

  function findUserByUsername(req, res) {
    var userName = req.query['userName'];
    userModel
      .findUserByUserName(userName)
      .then(function(user){
        if(user){
          res.json(user);
        } else {
          res.sendStatus(404);
        }
      }, function(err) {
        res.status(500).send(err);
      });
  }

  function findUser(req, res) {
    var userName = req.query['userName'];
    var password = req.query['password'];
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
        if(user) {
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
        if(resp.ok === 1 && resp.n === 1) {
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
