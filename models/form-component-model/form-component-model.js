const mongoose = require("mongoose");
const FormComponentSchema = require("./form-component-schema");
const ModelName = `form-component`;

const FormComponentModel = mongoose.model(ModelName, FormComponentSchema);

module.exports = FormComponentModel;
