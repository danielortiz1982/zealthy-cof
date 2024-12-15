const express = require("express");
const app = express();
const PORT = 3500;
const message = `Server is running on port ${PORT}`;

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.listen(PORT, console.log(message));
