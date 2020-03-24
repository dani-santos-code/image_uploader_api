// IMAGE ROUTES
const express = require("express");
const router = new express.Router();
const { isAuth } = require("../middleware/auth");

const {
  createImage,
  getImagesById,
  deleteImageById
} = require("../controllers/imagesController");

router
  .post("/images", isAuth, createImage)
  .get("/images/:id", isAuth, getImagesById)
  .delete("/images/:id", deleteImageById);

module.exports = router;
