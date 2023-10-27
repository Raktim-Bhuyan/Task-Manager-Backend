const mongoose = require("mongoose");
require("dotenv").config();

const mongoURI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@taskman.grnbfob.mongodb.net/?retryWrites=true&w=majority`;

const connectToMongo = () => {
  mongoose
    .connect(mongoURI)
    .then(() => {
      console.log("connected to mongo successfully");
    })
    .catch((e) => console.log(e));
};
module.exports = connectToMongo;
