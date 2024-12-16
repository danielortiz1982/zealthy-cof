const express = require("express");
const UserModel = require("../models/users/users-model");
const UserRouter = new express.Router();

UserRouter.get("/data/v1/users/", async (request, response) => {
  try {
    const payload = await UserModel.find();
    response.send(payload).status(200).end();
  } catch (err) {
    response.send({ err }).status(400).end();
  }
});

UserRouter.get("/data/v1/user/:id", async (request, response) => {
  try {
    const _id = request.params.id;
    const payload = await UserModel.findById(_id);
    response.send(payload).status(200).end();
  } catch (err) {
    response.send(err).status(400).end();
  }
});

UserRouter.post("/data/v1/user/new/", (request, response) => {
  const user = new UserModel(request.body);
  user.save();
  response.send(user).status(200).end();
});

UserRouter.delete("/data/v1/user/delete/:id", async (request, response) => {
  const _id = request.params.id;
  const user = await UserModel.findByIdAndDelete(_id);
  response.status(201).send(user).end();
});

module.exports = UserRouter;
