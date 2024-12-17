const mongoose = require("mongoose");
const FormFlowSchema = require("./form-flow-schema");
const ModelName = `form-flow`;

const FormFlowModel = mongoose.model(ModelName, FormFlowSchema);

module.exports = FormFlowModel;
