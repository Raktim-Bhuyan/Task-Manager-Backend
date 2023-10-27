const mongoose = require("mongoose");
const { options } = require("./routes/auth");
require("dotenv").config();

const mongoURI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@taskman.grnbfob.mongodb.net/db/?retryWrites=true&w=majority`;

const connectToMongo = () => {
  mongoose.connect(
    mongoURI,
    () => {
      console.log("connected to mongo successfully");
    },
    (options = {
      dbName: "db",
    })
  );
};
module.exports = connectToMongo;
