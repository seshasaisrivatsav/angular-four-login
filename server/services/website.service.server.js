module.exports = function (app) {
  app.get('/api/website', findAllWebsites);
  app.delete('/api/website/:websiteId', removeWebsite);

  var WEBSITES = [
    {_id: '123', name: 'Facebook', description: 'description 123'},
    {_id: '234', name: 'Twitter', description: 'description 234'},
    {_id: '345', name: 'Wikipedia', description: 'description 345'}
  ];

  function removeWebsite(req, res) {
    for(var w in WEBSITES) {
      if(WEBSITES[w]._id === req.params.websiteId) {
        WEBSITES.splice(w, 1);
        res.json(WEBSITES);
      }
    }
  }

  function findAllWebsites(req, res) {
    res.json(WEBSITES);
  }
};
