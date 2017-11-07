module.exports = function (app) {
  var WIDGETS = require('./widget.mock.server');
  app.get('/api/widget', findAllWidgets);
  function findAllWidgets(req, res) {
    res.json(WIDGETS);
  }
};
