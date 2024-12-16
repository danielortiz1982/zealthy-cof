const mongoose = require("mongoose");

const database = "zealthy-cof";
const appPort = 27017;
const dbConnection = `mongodb://127.0.0.1:${appPort}/${database}`;

mongoose.connect(dbConnection);
