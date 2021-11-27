const app = require("./app");
require("dotenv").config();
const Database = require('./config/database')

Database()

app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});
