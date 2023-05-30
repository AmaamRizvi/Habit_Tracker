const mongoose = require("mongoose");
const URI = require("./keys");

const db = mongoose
  .connect(URI.MongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB successfully!");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = db;