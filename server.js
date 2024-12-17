const db = require("./utilities/db/db-connect");
const express = require("express");
const UserRouter = require("./router/user-router/user-router");
const FormComponentRouter = require("./router/form-component-router/form-component-router");
const FormFlowRouter = require("./router/form-flow-router/form-flow-router");
const app = express();
const PORT = 80;
const message = `Server is running on port ${PORT}`;
app.use(express.json());
app.use(express.static(__dirname));
app.use(UserRouter);
app.use(FormComponentRouter);
app.use(FormFlowRouter);
app.get("/", (req, res) => res.sendFile("index.html"));
app.listen(PORT, console.log(message));
