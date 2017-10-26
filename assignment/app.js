module.exports = function (app) {
  var userService = require("./services/user.service.server.js");
  userService(app);
  var websiteService = require("./services/website.service.server");
  websiteService(app);
  var pageService = require("./services/page.service.server");
  pageService(app);
  var widgetService = require("./services/widget.service.server");
  widgetService(app);
};
