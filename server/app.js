module.exports = function (app) {

  var mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost/test', { useMongoClient: true });
  mongoose.Promise = global.Promise;

  require('./services/user.service.server')(app);
  require('./services/website.service.server')(app);

};
