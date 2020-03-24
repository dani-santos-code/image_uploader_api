// CRUD

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const database = "image-uploader";

MongoClient.connect(
  connectionURL,
  { useUnifiedTopology: true },
  (err, client) => {
    if (err) {
      return console.log("Unable to connect to the database");
    }
    console.log("Connected correctly");
  }
);
