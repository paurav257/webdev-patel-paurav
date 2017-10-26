module.exports = function (app) {

  app.post('api/page/:pageId/widget', createWidget);
  app.get('/api/page/:pageId/widget', findAllWidgetsForPage);
  app.put('/api/page/:pageId/widget', updatePageOrder);
  app.get('/api/widget/:widgetId', findWidgetById);
  app.put('/api/widget/:widgetId', updateWidget);
  app.delete('/api/widget/:widgetId', deleteWidget);

  var multer = require('multer'); // npm install multer --save
  var upload = multer({dest: __dirname + '/../../dist/assets/uploads'});

  app.post("/api/upload", upload.single('myFile'), uploadImage);
  widgets = [
    {'_id': '123', 'widgetType': 'HEADING', 'pageId': '321', 'size': 2, 'text': 'GIZMODO', 'index': '1'},
    {'_id': '234', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum', 'index': '2'},
    {
      '_id': '345', 'widgetType': 'IMAGE', 'pageId': '321', 'width': '100%',
      'url': 'https://i.pinimg.com/originals/a2/2a/0a/a22a0a7e624943303b23cc326598c167.jpg', 'index': '3'
    },
    {'_id': '456', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>', 'index': '4'},
    {'_id': '567', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum', 'index': '5'},
    {
      '_id': '678', 'widgetType': 'YOUTUBE', 'pageId': '321', 'width': '100%',
      'url': 'https://www.youtube.com/embed/vlDzYIIOYmM', 'index': '6'
    },
    {'_id': '789', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>', 'index': '7'}
  ];

  function uploadImage(req, res) {

    var widgetId = req.body.widgetId;
    var width = req.body.width;
    var myFile = req.file;

    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;

    var originalname = myFile.originalname; // file name on user's computer
    var filename = myFile.filename;     // new file name in upload folder
    var path = myFile.path;         // full path of uploaded file
    var destination = myFile.destination;  // folder where file is saved to
    var size = myFile.size;
    var mimetype = myFile.mimetype;

    widget = {
      '_id': widgetId,
      'widgetType': 'IMAGE',
      'pageId': pageId,
      'width': width
    };
    widget.url = '/assets/uploads/' + filename;

    var callbackUrl = "/user/" + userId + "/website/" + websiteId + '/page/' + pageId + '/widget';

    res.redirect(callbackUrl);
  }

  function getHighestIndex(pageId) {
    var sortedWidgets = getSortedWidgets(pageId);
    if (sortedWidgetsList.length != 0) {
      return sortedWidgets[0]['index'];
    }
    return 0;
  }

  function getSortedWidgets(pageId) {
    return this.widgets.filter(function (widget) {
      return widget['pageId'] == pageId;
    })
      .sort(function (a, b) {
        return a['index'] < b['index'];
      });
  }

  function createWidget(req, res) {
    var pageId = req.param('pageId');
    var widget = req.body;
    widget['_id'] = Math.floor(Math.random() * 1000) + '';
    widget['pageId'] = pageId;
    widget['index'] = getHighestIndex(pageId) + 1;
    this.widgets.push(widget);
    res.json(widget);
  }

  function findAllWidgetsForPage(req, res) {
    var pageId = req.param('pageId');
    var widgets = getSortedWidgets(pageId);
    res.json(widgets);
  }

  function findWidgetById(req, res) {
    var widgetId = req.param('widgetId');
    var widget = this.widgets.find(function (widget) {
      return widget['_id'] === widgetId;
    });
    res.json(widget);
  }

  function updateWidget(req, res) {
    var widgetId = req.param('widgetId');
    var widget = req.body;
    for (var x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]['_id'] === widgetId) {
        switch (widget['type']) {
          case 'HEADING':
            this.widgets[x]['size'] = widget['size'];
            this.widgets[x]['text'] = widget['text'];
            break;
          case 'IMAGE':
            this.widgets[x]['width'] = widget['width'];
            this.widgets[x]['url'] = widget['url'];
            break;
          case 'YOUTUBE':
            this.widgets[x]['width'] = widget['width'];
            this.widgets[x]['url'] = widget['url'];
            break;
          case 'HTML':
            this.widgets[x]['text'] = widget['text'];
            break;
        }
        this.widgets[x]['_id'] = widgetId;
        res.json(this.widgets[x]);
        return;
      }
    }
  }

  function deleteWidget(req, res) {
    var widgetId = req.param('widgetId');
    for (var x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]['_id'] === widgetId) {
        delete this.widgets[x];
        res.statusCode(200);
        return;
      }
    }
  }

  function updatePageOrder(req, res) {

  }
}
