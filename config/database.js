const mongoose = require("mongoose");

const connectDatabase = async () => {
  await mongoose
    .connect(process.env.db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
