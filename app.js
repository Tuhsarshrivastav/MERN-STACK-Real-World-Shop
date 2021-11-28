const express = require("express");
const errorMiddleware = require("./middlewares/errorMiddleware");
const app = express();

// middlewares
app.use(express.json());
// routes imports
const product = require("./routes/productrRoute");

app.use("/api/v1/", product);

// error midlleware
app.use(errorMiddleware);

module.exports = app;
