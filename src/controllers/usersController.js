const { User } = require("../models/User");

const createUser = (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then(() => res.status(201).send(user))
    .catch(err => res.status(400).send(err));
};

const getUser = (req, res) => {
  User.find({})
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.status(500).send({ message: err });
    });
};

const getUserById = (req, res) => {
  const _id = req.params.id;
  User.findById(_id)
    .then(user => {
      if (!user) {
        return res.senStatus(404).send();
      }
      res.send(user);
    })
    .catch(err => {
      res.status(500).send({ message: err });
    });
};
module.exports = { createUser, getUser, getUserById };
