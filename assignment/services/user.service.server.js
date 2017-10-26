module.exports = function (app) {

  app.get('/api/user', findUser);
  app.post('/api/user', createUser);
  app.get('/api/user/:userId', findUserById);
  app.put('/api/user/:userId', updateUser);
  app.delete('/api/user/:userId', deleteUser);

  users = [
    {
      _id: '123',
      userName: 'alice',
      password: 'alice',
      firstName: 'Alice',
      lastName: 'Wonder',
      email: 'alice@gmail.com'
    },
    {_id: '234', userName: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley', email: 'bob@gmail.com'},
    {
      _id: '345',
      userName: 'charly',
      password: 'charly',
      firstName: 'Charly',
      lastName: 'Garcia',
      email: 'charly@gmail.com'
    },
    {
      _id: '456',
      userName: 'jannunzi',
      password: 'jannunzi',
      firstName: 'Jose',
      lastName: 'Annunzi',
      email: 'ja@gmail.com'
    }
  ];

  function findUserByCredentials(req, res) {
    var userName = req.query['userName'];
    var password = req.query['password'];
    var user = users.find(function (user) {
      return user['userName'] === userName && user['password'] === password;
    });
    if (user) {
      res.json(user);
    } else {
      res.sendStatus(401);
    }
    return;
  }

  function findUserByUsername(req, res) {
    var userName = req.query['userName'];
    var user = users.find(function (user) {
      return user['userName'] === userName;
    });
    if (user) {
      res.json(user);
    } else {
      res.sendStatus(404);
    }
    return;
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
    user['_id'] = Math.floor(Math.random() * 1000) + '';
    users.push(user);
    res.json(user);
  }

  function findUserById(req, res) {
    var userId = req.param('userId');
    var userName = req.query['userName'];
    var user = users.find(function (user) {
      return user['_id'] === userId;
    });
    res.json(user);
  }

  function updateUser(req, res) {
    var userId = req.param('userId');
    for (var x = 0; x < users.length; x++) {
      if (users[x]['_id'] === userId) {
        var newUser = req.body;
        users[x]['firstName'] = newUser.firstName;
        users[x]['lastName'] = newUser.lastName;
        users[x]['userName'] = newUser.userName;
        users[x]['email'] = newUser.email;
        res.json(users[x]);
        return;
      }
    }
  }

  function deleteUser(req, res) {
    var userId = req.param('userId');
    for (var x = 0; x < users.length; x++) {
      if (users[x]['_id'] === userId) {
        delete users[x];
        res.statusCode(200);
        return;
      }
    }
  }
};
