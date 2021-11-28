const app = require("./app");
require("dotenv").config();
const Database = require("./config/database");
Database();

// Handling uncaught exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shatting down the server due to uncaught exception");
  process.exit(1);

});

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

// unhandleed  promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shatting down the server due to unhandled promise Rejection");
  server.close(() => {
    process.exit(1);
  });
});
