const { Image } = require("../models/Image");

const createImage = async (req, res) => {
  const image = new Image({ ...req.body, owner: req.user._id });
  try {
    await image.save();
    res.status(201).send(image);
  } catch (e) {
    res.status(400).send(e);
  }
};

const createImageOnUpload = async (req, res) => {
  const files = req.files;
  for (let file of files) {
    Image.create({
      path: `/uploads/${file.filename}`,
      owner: req.user._id
    });
  }
  res.send();
};

const getAllImages = async (req, res) => {
  try {
    const images = await Image.find({ owner: req.user._id });
    console.log(images);
    if (!images) {
      return res.status(404).send();
    }
    res.send(images);
  } catch (e) {
    res.sendStatus(500).send();
  }
};

const getImagesById = async (req, res) => {
  const _id = req.params.id;
  try {
    const image = await Image.findOne({ _id, owner: req.user._id });
    if (!image) {
      return res.status(404).send();
    }
    res.send(image);
  } catch (e) {
    res.sendStatus(500).send();
  }
};
const deleteImageById = async (req, res) => {
  try {
    const imageByUserId = await Image.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id
    });
    if (!imageByUserId) {
      return res.sendStatus(404).send();
    }
    res.send({ message: "Successfully deleted." });
  } catch (e) {
    res.status(500).send(e);
  }
};

module.exports = {
  createImage,
  createImageOnUpload,
  getAllImages,
  getImagesById,
  deleteImageById
};
