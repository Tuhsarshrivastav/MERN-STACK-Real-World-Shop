const express = require("express");
const app = express();

// middlewares
app.use(express.json());
// routes imports
const product = require("./routes/productrRoute");

app.use("api/v1/", product);
module.exports = app;
