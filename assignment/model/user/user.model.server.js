module.exports = function () {
  var model;
  var mongoose = require("mongoose");
  var UserSchema = require("./user.schema.server")();
  var UserModel = mongoose.model("UserModel", UserSchema);

  UserModel.setModel = setModel;
  UserModel.createUser = createUser;
  UserModel.findUserById = findUserById;
  UserModel.findUserByUsername = findUserByUsername;
  UserModel.findUserByCredentials = findUserByCredentials;
  UserModel.updateUser = updateUser;
  UserModel.deleteUser = deleteUser;

  return UserModel;

  function setModel(_model) {
    model = _model;
  }

  function createUser(user) {
    return UserModel.create(user);
  }

  function findUserById(userId) {
    return UserModel.findById(userId);
  }

  function findUserByUsername(username) {
    return UserModel.findOne({userName: username});
  }

  function findUserByCredentials(_username, _password) {
    return UserModel.findOne({
      userName: _username,
      password: _password
    });
  }

  function updateUser(userId, updatedUser) {
    return UserModel.update({_id: userId}, {$set: updatedUser});
  }

  function recursiveDelete(websitesOfUser, userId) {
    if (websitesOfUser.length === 0) {
      return UserModel
        .remove({_id: userId})
        .then(function (response) {
          if (response.result.n === 1 && response.result.ok === 1) {
            return response;
          }
        }, function (err) {
          return err;
        });
    }

    return model.websiteModel
      .deleteWebsiteAndChildren(websitesOfUser.shift())
      .then(function (response) {
        if (response.result.n === 1 && response.result.ok === 1) {
          return recursiveDelete(websitesOfUser, userId);
        }
      }, function (err) {
        return err;
      });
  }

  function deleteUser(userId) {
    return UserModel
      .findById({_id: userId})
      .then(function (user) {
        var websitesOfUser = user.websites;
        return recursiveDelete(websitesOfUser, userId);
      }, function (err) {
        return err;
      });
  }

};
