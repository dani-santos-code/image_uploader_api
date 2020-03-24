// IMAGE ROUTES
const express = require("express");
const router = new express.Router();

const {
  createImage,
  getImage,
  getImageById,
  deleteImageById
} = require("../controllers/imagesController");

router
  .post("/images", createImage)
  .get("/images", getImage)
  .get("/images/:id", getImageById)
  .delete("/images/:id", deleteImageById);

module.exports = router;
