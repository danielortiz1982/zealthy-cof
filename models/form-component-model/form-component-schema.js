const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FormComponentSchema = new Schema({
  name: {
    type: String,
  },
  htmlID: {
    type: String,
  },
  htmlType: {
    type: String,
  },
  label: {
    type: String,
  },
});

module.exports = FormComponentSchema;
