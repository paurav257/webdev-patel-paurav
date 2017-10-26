module.exports = function (app) {

  app.post('api/user/:userId/website', createWebsite);
  app.get('/api/user/:userId/website', findAllWebsitesForUser);
  app.get('/api/website/:websiteId', findWebsiteById);
  app.put('/api/website/:websiteId', updateWebsite);
  app.delete('/api/website/:websiteId', deleteWebsite);

  websites = [
    {'_id': '123', 'name': 'Facebook', 'developerId': '456', 'description': 'Lorem'},
    {'_id': '234', 'name': 'Tweeter', 'developerId': '456', 'description': 'Lorem'},
    {'_id': '456', 'name': 'Gizmodo', 'developerId': '456', 'description': 'Lorem'},
    {'_id': '890', 'name': 'Go', 'developerId': '123', 'description': 'Lorem'},
    {'_id': '567', 'name': 'Tic Tac Toe', 'developerId': '123', 'description': 'Lorem'},
    {'_id': '678', 'name': 'Checkers', 'developerId': '123', 'description': 'Lorem'},
    {'_id': '789', 'name': 'Chess', 'developerId': '234', 'description': 'Lorem'}
  ];

  function createWebsite(req, res) {
    var userId = req.param('userId');
    var website = req.body;
    website['_id'] = Math.floor(Math.random() * 1000) + '';
    website['developerId'] = userId;
    this.websites.push(website);
    res.json(website);

  }

  function findAllWebsitesForUser(req, res) {
    var userId = req.param('userId');
    var websites = this.websites.filter(function (website) {
      return website['developerId'] === userId;
    });
    res.json(websites);
  }

  function findWebsiteById(req, res) {
    var websiteId = req.param('websiteId');
    var website = this.websites.find(function (website) {
      return website['_id'] === websiteId;
    });
    res.json(website);
  }

  function updateWebsite(req, res) {
    var websiteId = req.param('websiteId');
    var website = req.body;
    for (var x = 0; x < this.websites.length; x++) {
      if (this.websites[x]['_id'] === websiteId) {
       this.websites[x]['name'] = website.name;
        this.websites[x]['description'] = website.description;
        res.json(this.websites[x]);
        return;
      }
    }
  }

  function deleteWebsite(req, res) {
    var websiteId = req.param('websiteId');
    for (var x = 0; x < this.websites.length; x++) {
      if (this.websites[x]['_id'] === websiteId) {
        delete this.websites[x];
        res.statusCode(200);
        return;
      }
    }
    res.statusCode(404);
  }
}
