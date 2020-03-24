const { Image } = require("../models/Image");

const createImage = async (req, res) => {
  const image = new Image(req.body);
  try {
    await image.save();
    res.status(201).send(image);
  } catch (e) {
    res.status(400).send(e);
  }
};

const getImage = async (req, res) => {
  try {
  } catch (e) {}
  Image.find({})
    .then(images => {
      res.send(images);
    })
    .catch(err => {
      res.status(500).send({ message: err });
    });
};

const getImageById = async (req, res) => {
  const _id = req.params.id;
  try {
    const imageFound = await Image.findById(_id);
    if (!imageFound) {
      return res.sendStatus(404).send();
    }
    res.send(imageFound);
  } catch (e) {
    res.status(500).send({ message: e });
  }
};

module.exports = { createImage, getImage, getImageById };
