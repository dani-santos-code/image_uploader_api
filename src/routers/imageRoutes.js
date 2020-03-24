// IMAGE ROUTES
const express = require("express");
const router = new express.Router();
const { isAuth } = require("../middleware/auth");

const {
  createImage,
  getAllImages,
  getImagesById,
  deleteImageById
} = require("../controllers/imagesController");

router
  .post("/images", isAuth, createImage)
  .get("/images", isAuth, getAllImages)
  .get("/images/:id", isAuth, getImagesById)
  .delete("/images/:id", isAuth, deleteImageById);

module.exports = router;
