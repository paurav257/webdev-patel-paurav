module.exports = function () {
  var model;
  var mongoose = require("mongoose");
  var WebsiteSchema = require("./website.schema.server")();
  var WebsiteModel = mongoose.model("WebsiteModel", WebsiteSchema);

  WebsiteModel.setModel = setModel;
  WebsiteModel.createWebsiteForUser = createWebsiteForUser;
  WebsiteModel.findAllWebsitesForUser = findAllWebsitesForUser;
  WebsiteModel.findWebsiteById = findWebsiteById;
  WebsiteModel.updateWebsite = updateWebsite;
  WebsiteModel.deleteWebsite = deleteWebsite;

  return WebsiteModel;

  function setModel(_model) {
    model = _model;
  }

  function createWebsiteForUser(userId, website) {
    return WebsiteModel
      .create(website)
      .then(
        function (website) {
          return model.userModel
            .findUserById(userId)
            .then(function (user) {
              website._user = user._id;
              user.websites.push(website._id);
              website.save();
              user.save();
              return website;
            }, function (err) {
              return err;
            })
        },
        function (err) {
          return err;
        });
  }

  function findAllWebsitesForUser(userId) {
    return WebsiteModel.find({"_user": userId});
  }

  function findWebsiteById(websiteId) {
    return WebsiteModel.findOne({_id: websiteId});
  }

  function updateWebsite(websiteId, updatedWebsite) {
    return WebsiteModel.update({_id: websiteId}, {$set: updatedWebsite});
  }

  function deleteWebsite(websiteId) {
    return WebsiteModel
      .findOne({_id: websiteId})
      .populate('_user')
      .then(function (website) {
        website._user.websites
          .splice(website._user.websites.indexOf(websiteId), 1);
        website._user.save();
        return deleteWebsiteAndChildren(websiteId);
      }, function (err) {
        return err;
      });
  }

  function recursiveDelete(pagesOfWebsite, websiteId) {
    if (pagesOfWebsite.length === 0) {
      return WebsiteModel
        .remove({_id: websiteId})
        .then(function (response) {
          if (response.result.n === 1 && response.result.ok === 1) {
            return response;
          }
        }, function (err) {
          return err;
        });
    }

    return model.pageModel
      .deletePageAndChildren(pagesOfWebsite.shift())
      .then(function (response) {
        if (response.result.n === 1 && response.result.ok === 1) {
          return recursiveDelete(pagesOfWebsite, websiteId);
        }
      }, function (err) {
        return err;
      });
  }

  function deleteWebsiteAndChildren(websiteId) {
    // Delete the website and its children (pages)
    return WebsiteModel
      .findById({_id: websiteId}).select({'pages': 1})
      .then(function (website) {
        var pagesOfWebsite = website.pages;
        return recursiveDelete(pagesOfWebsite, websiteId);
      }, function (err) {
        return err;
      });
  }

};
