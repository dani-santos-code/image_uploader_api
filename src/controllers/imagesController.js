const { Image } = require("../models/Image");

const createImage = (req, res) => {
  const image = new Image(req.body);
  image
    .save()
    .then(() => res.status(201).send(image))
    .catch(err => res.status(400).send(err));
};

const getImage = (req, res) => {
  Image.find({})
    .then(images => {
      res.send(images);
    })
    .catch(err => {
      res.status(500).send({ message: err });
    });
};

const getImageById = (req, res) => {
  const _id = req.params.id;
  Image.findById(_id)
    .then(image => {
      if (!image) {
        return res.senStatus(404).send();
      }
      res.send(image);
    })
    .catch(err => {
      res.status(500).send({ message: err });
    });
};

module.exports = { createImage, getImage, getImageById };
