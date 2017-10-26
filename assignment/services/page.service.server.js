module.exports = function (app) {

  app.post('/api/website/:websiteId/page', createPage);
  app.get('/api/website/:websiteId/page', findAllPagesForWebsite);
  app.get('/api/page/:pageId', findPageById);
  app.put('/api/page/:pageId', updatePage);
  app.delete('/api/page/:pageId', deletePage);

  pages = [
    {'_id': '321', 'name': 'Post 1', 'websiteId': '456', 'description': 'Lorem'},
    {'_id': '432', 'name': 'Post 2', 'websiteId': '456', 'description': 'Lorem'},
    {'_id': '543', 'name': 'Post 3', 'websiteId': '456', 'description': 'Lorem'}
  ];

  function createPage(req, res) {
    var websiteId = req.param('websiteId');
    var page = req.body;
    page['_id'] = Math.floor(Math.random() * 1000) + '';
    page['websiteId'] = websiteId;
    this.pages.push(page);
    res.json(page);
  }

  function findAllPagesForWebsite(req, res) {
    var websiteId = req.param('websiteId');
    var pages = this.pages.filter(function (page) {
      return page['websiteId'] === websiteId;
    });
    res.json(pages);
  }

  function findPageById(req, res) {
    var pageId = req.param('pageId');
    var page = this.pages.find(function (page) {
      return page['_id'] === pageId;
    });
    res.json(page);
  }

  function updatePage(req, res) {
    var pageId = req.param('pqgeId');
    var page = req.body;
    for (var x = 0; x < this.pages.length; x++) {
      if (this.pages[x]['_id'] === pageId) {
        this.pages[x]['name'] = page.name;
        this.pages[x]['description'] = page.description;
        res.json(this.pages[x]);
        return;
      }
    }
  }

  function deletePage(req, res) {
    var pageId = req.param('pageId');
    for (var x = 0; x < this.pages.length; x++) {
      if (this.pages[x]['_id'] === pageId) {
        delete this.pages[x];
        res.statusCode(200);
      }
    }
    res.statusCode(404);
  }
}
