const express = require("express");
const FormFlowModel = require("../../models/form-flow-model/form-flow-model");
const FormFlowRouter = new express.Router();

FormFlowRouter.get("/data/v1/form-flows/", async (request, response) => {
  try {
    const formFlow = await FormFlowModel.find();
    response.send(formFlow).status(200).end();
  } catch (err) {
    response.send({ err }).status(400).end();
  }
});

FormFlowRouter.get("/data/v1/form-flow/:id", async (request, response) => {
  try {
    const _id = request.params.id;
    const formFlow = await FormFlowModel.findById(_id);
    response.send(formFlow).status(200).end();
  } catch (err) {
    response.send(err).status(400).end();
  }
});

FormFlowRouter.post("/data/v1/form-flow/new", (request, response) => {
  const formFlow = new FormFlowModel(request.body);
  formFlow.save();
  response.send(formFlow).status(200).end();
});

FormFlowRouter.delete(
  "/data/v1/form-flow/delete/:id",
  async (request, response) => {
    try {
      const _id = request.params.id;
      const formFlow = await FormFlowModel.findByIdAndDelete(_id);
      response.status(201).send(formFlow).end();
    } catch (err) {
      response.status(400).send(err).end();
    }
  }
);

FormFlowRouter.put(
  "/data/v1/form-flow/update/:id",
  async (request, response) => {
    const _id = request.params.id;
    try {
      const formFlow = await FormFlowModel.findByIdAndUpdate(
        _id,
        request.body,
        {
          new: true,
          runValidators: true,
        }
      );
      response.status(201).send(formFlow).end();
    } catch (err) {
      response.status(400).send(err).end();
    }
  }
);

module.exports = FormFlowRouter;
