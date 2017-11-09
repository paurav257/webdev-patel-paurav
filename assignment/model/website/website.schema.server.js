module.exports = function () {
  var mongoose = require("mongoose");

  var webisteSchema = mongoose.Schema({
    _user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserModel"
    },
    name: String,
    description: String,
    pages: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "PageModel"
    }],
    dateCreated: {
      type: Date,
      default: Date.now()
    }
  }, {collection: "websites"});

  return webisteSchema;
};
