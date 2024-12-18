const db = require("./utilities/db/db-connect");
const express = require("express");
const UserRouter = require("./router/user-router/user-router");
const FormComponentRouter = require("./router/form-component-router/form-component-router");
const FormFlowRouter = require("./router/form-flow-router/form-flow-router");
const app = express();
const PORT = 80;
const message = `Server is running on port ${PORT}`;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from http://192.168.1.152:3000
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
app.use(express.static(`${__dirname}/public/build/`));
app.use(UserRouter);
app.use(FormComponentRouter);
app.use(FormFlowRouter);
app.get("/", (req, res) => res.sendFile("index.html"));
app.listen(PORT, console.log(message));
