const express = require("express");
const UserRouter = require("./router/user-router");
const app = express();
const PORT = 80;
const message = `Server is running on port ${PORT}`;
const db = require("./utilities/db/db-connect");
app.use(express.json());
app.use(express.static(__dirname));
app.use(UserRouter);

app.get("/", (req, res) => res.sendFile("index.html"));

app.listen(PORT, console.log(message));
