const express = require("express");
const FormComponentModel = require("../../models/form-component-model/form-component-model");
const FormComponentRouter = new express.Router();

FormComponentRouter.get(
  "/data/v1/form-components/",
  async (request, response) => {
    try {
      const formComponents = await FormComponentModel.find();
      response.send(formComponents).status(200).end();
    } catch (err) {
      response.send(err).status(400).end();
      console.error(err);
    }
  }
);

FormComponentRouter.get(
  "/data/v1/form-component/:id",
  async (request, response) => {
    try {
      const _id = request.params.id;
      const formComponent = await FormComponentModel.findById(_id);
      response.send(formComponent).status(200).end();
    } catch (err) {
      response.send(err).status(400).end();
    }
  }
);

FormComponentRouter.post("/data/v1/form-component/new", (request, response) => {
  const formComponent = new FormComponentModel(request.body);
  formComponent.save();
  response.send(formComponent).status(200).end();
});

FormComponentRouter.delete(
  "/data/v1/form-component/delete/:id",
  async (request, response) => {
    try {
      const _id = request.params.id;
      const formComponent = await FormComponentModel.findByIdAndDelete(_id);
      response.status(201).send(formComponent).end();
    } catch (err) {
      response.send(err).status(400).end();
    }
  }
);

FormComponentRouter.put(
  "/data/v1/form-component/update/:id",
  async (request, response) => {
    const _id = request.params.id;
    try {
      const formComponent = await FormComponentModel.findByIdAndUpdate(
        _id,
        request.body,
        {
          new: true,
          runValidators: true,
        }
      );
      response.status(201).send(formComponent).end();
    } catch (e) {
      response.status(400).send(e).end();
    }
  }
);

module.exports = FormComponentRouter;
