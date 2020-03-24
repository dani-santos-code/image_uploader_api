const { Image } = require("../models/Image");

const createImage = (req, res) => {
  const image = new Image(req.body);
  image
    .save()
    .then(() => res.status(201).send(image))
    .catch(err => res.status(400).send(err));
};

module.exports = { createImage };
