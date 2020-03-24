const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  path: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: "user"
  }
});

const Image = mongoose.model("image", imageSchema);

module.exports = { Image };
