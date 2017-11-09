module.exports = function (app, pageModel) {

  app.post('/api/website/:websiteId/page', createPage);
  app.get('/api/website/:websiteId/page', findAllPagesForWebsite);
  app.get('/api/page/:pageId', findPageById);
  app.put('/api/page/:pageId', updatePage);
  app.delete('/api/page/:pageId', deletePage);

  function createPage(req, res) {
    var websiteId = req.param('websiteId');
    var page = req.body;
    pageModel
      .createPage(websiteId, page)
      .then(function (page) {
        res.json(page);
      }, function (err) {
        res.status(500).send(err);
      });
  }

  function findAllPagesForWebsite(req, res) {
    var websiteId = req.param('websiteId');
    pageModel
      .findAllPagesForWebsite(websiteId)
      .then(function (pages) {
        res.json(pages);
      }, function (err) {
        res.status(500).send(err);
      });
  }

  function findPageById(req, res) {
    var pageId = req.param('pageId');
    pageModel
      .findPageById(pageId)
      .then(function (page) {
        res.json(page);
      }, function (err) {
        res.status(500).send(err);
      });
  }

  function updatePage(req, res) {
    var pageId = req.param('pageId');
    var page = req.body;
    pageModel
      .updatePage(pageId, page)
      .then(function (resp) {
        if(resp.ok === 1 && resp.n === 1) {
          res.sendStatus(200)
        } else {
          res.sendStatus(404);
        }
      }, function (err) {
        res.status(500).send(err);
      });
  }

  function deletePage(req, res) {
    var pageId = req.param('pageId');
    pageModel
      .deletePage(pageId)
      .then(function (resp) {
        res.sendStatus(200);
      }, function (err) {
        res.status(500).send(err);
      });
  }
};
