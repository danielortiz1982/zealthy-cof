const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FormFlowSchema = new Schema({
  name: {
    type: String,
  },
  heading: {
    type: String,
  },
});

module.exports = FormFlowSchema;
