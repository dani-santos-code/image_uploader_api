const mongoose = require("mongoose");

const Image = mongoose.model("Image", {
  path: {
    type: String,
    required: true
  }
});
