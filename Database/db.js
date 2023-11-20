require("dotenv").config();
const dburl = process.env.MONGODB_URI;
const mongoose = require("mongoose");
// const mongoURI = process.env.MONGODB_URI;

const connectToMongo = () => {

  //console.log(dburl+"abc");
  mongoose
    .connect(`mongodb+srv://Sneha:Sneha@cluster0.nhxqexb.mongodb.net/test`)
    .then(() => {
      console.log("Connected to MongoDB Successfully");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB", error);
    });
};

module.exports = connectToMongo;
