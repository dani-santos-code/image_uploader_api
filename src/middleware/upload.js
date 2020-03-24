const multer = require("multer");
const createHash = require("hash-generator");

const upload = multer({
  dest: "images/",
  limits: {
    fileSize: 2000000 // 2megabytes
  },
  filename: (req, file, cb) => {
    const fileName = `${Date.now()} ${createHash(8)} ${file.originalname}`;
    cb(null, fileName);
  },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  }
});

module.exports = { upload };
