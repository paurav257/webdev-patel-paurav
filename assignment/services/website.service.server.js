module.exports = function (app, websiteModel) {

  app.post('/api/user/:userId/website', createWebsite);
  app.get('/api/user/:userId/website', findAllWebsitesForUser);
  app.get('/api/website/:websiteId', findWebsiteById);
  app.put('/api/website/:websiteId', updateWebsite);
  app.delete('/api/website/:websiteId', deleteWebsite);

  function createWebsite(req, res) {
    var userId = req.param('userId');
    var website = req.body;
    websiteModel
      .createWebsiteForUser(userId, website)
      .then(function (webite) {
        res.json(webite);
      }, function (err) {
        res.status(500).send(err);
      });
  }

  function findAllWebsitesForUser(req, res) {
    var userId = req.param('userId');
    websiteModel
      .findAllWebsitesForUser(userId)
      .then(function (websites) {
        res.json(websites);
      }, function (err) {
        res.status(500).send(err);
      });
  }

  function findWebsiteById(req, res) {
    var websiteId = req.param('websiteId');
    websiteModel.findWebsiteById(websiteId)
      .then(function (website) {
        res.json(website);
      }, function (err) {
        res.status(500).send(err);
      });
  }

  function updateWebsite(req, res) {
    var websiteId = req.param('websiteId');
    var website = req.body;
    websiteModel
      .updateWebsite(websiteId, website)
      .then(function (resp) {
        if(resp.ok === 1 && resp.n === 1) {
          res.sendStatus(200);
        } else {
          res.sendStatus(404);
        }
      }, function (err) {
        res.status(500).send(err);
      });
  }


  function deleteWebsite(req, res) {
    var websiteId = req.param('websiteId');
    websiteModel
      .deleteWebsite(websiteId)
      .then(function (resp) {
        res.sendStatus(200);
      }, function (err) {
        res.status(500).send(err);
      });
  }
};
