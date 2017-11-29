module.exports = function () {
  var mongoose = require("mongoose");

  var userSchema = mongoose.Schema({
    userName: String,
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    websites: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "WebsiteModel"
    }],
    dateCreated: {
      type: Date,
      default: Date.now()
    },
    facebook: {
      id:    String,
      token: String
    }
  }, {collection: "users"});

  return userSchema;
};
