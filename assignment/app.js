module.exports = function (app) {
  var model = require('./model/models.server')();
  var userService = require("./services/user.service.server.js");
  userService(app, model.userModel);
  var websiteService = require("./services/website.service.server");
  websiteService(app, model.websiteModel);
  var pageService = require("./services/page.service.server");
  pageService(app, model.pageModel);
  var widgetService = require("./services/widget.service.server");
  widgetService(app, model.widgetModel);
};
