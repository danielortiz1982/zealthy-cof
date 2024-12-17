const mongoose = require("mongoose");
const UserSchema = require("./user-schema");
const ModelName = `user`;

const UserModel = mongoose.model(ModelName, UserSchema);

module.exports = UserModel;
