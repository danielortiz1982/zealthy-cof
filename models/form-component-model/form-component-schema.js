const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FormComponentSchema = new Schema({
  name: {
    type: String,
  },
});

module.exports = FormComponentSchema;
