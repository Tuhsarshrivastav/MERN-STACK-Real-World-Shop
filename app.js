const express = require("express");
const errorMiddleware = require("./middlewares/errorMiddleware");
const app = express();

// middlewares
app.use(express.json());
// routes imports
const product = require("./routes/productrRoute");
const user = require("./routes/userRoute");

app.use("/api/v1/", product);
app.use("/api/v1", user);
// error midlleware
app.use(errorMiddleware);

module.exports = app;
