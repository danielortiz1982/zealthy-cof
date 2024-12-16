const mongoose = require("mongoose");
const UserSchema = require("./users-schema");
const ModelName = `user`;

const UserModel = mongoose.model(ModelName, UserSchema);

module.exports = UserModel;
