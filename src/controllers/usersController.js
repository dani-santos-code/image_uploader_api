const { User } = require("../models/User");

const createUser = (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then(() => res.status(201).send(user))
    .catch(err => res.status(400).send(err));
};

module.exports = { createUser };
