const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  details: {
    type: Object,
  },
  role: {
    type: String,
  },
});

module.exports = UserSchema;
