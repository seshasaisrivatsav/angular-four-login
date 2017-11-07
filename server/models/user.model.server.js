var mongoose = require("mongoose");
var userSchema = require("./user.schema.server");
var userModel = mongoose.model("UserModel", userSchema);
userModel.createUser = createUser;
userModel.findUserByCredentials = findUserByCredentials;
module.exports = userModel;
function createUser(user) {
  return userModel.create(user);
}
function findUserByCredentials(username, password) {
  return userModel.findOne({username: username, password: password});
}
