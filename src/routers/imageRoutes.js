// IMAGE ROUTES
const express = require("express");
const router = new express.Router();
const { isAuth } = require("../middleware/auth");
const { upload } = require("../middleware/upload");
const {
  createImageOnUpload,
  getAllUsersImages,
  getImagesById,
  deleteImageById
} = require("../controllers/imagesController");

router
  .get("/images", isAuth, getAllUsersImages)
  .post(
    "/images/me/upload",
    isAuth,
    upload.array("upload", 6),
    createImageOnUpload,
    (error, req, res, next) => {
      res.status(400).send({ error: error.message });
    }
  )
  .get("/images/:id", isAuth, getImagesById)
  .delete("/images/:id", isAuth, deleteImageById);

module.exports = router;
