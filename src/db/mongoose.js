// code to connect to the DB
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/image-upload-api", {
  useNewUrlParser: true,
  useCreateIndex: true
});
