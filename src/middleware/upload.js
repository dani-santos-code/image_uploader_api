const multer = require("multer");

const uploadSingle = multer({
  dest: "images"
});

module.exports = { uploadSingle };
