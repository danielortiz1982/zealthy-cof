const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FormComponentSchema = new Schema({
  name: {
    type: String,
  },
  value: {
    type: String,
  },
});

module.exports = FormComponentSchema;
