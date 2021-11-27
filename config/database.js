const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose
      .connect(process.env.db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
      })
      .then((data) => {
        console.log(`Mongodb connected with server: ${data.connection.host}`);
      });
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDatabase;
