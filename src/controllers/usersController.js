const { User } = require("../models/User");

const createUser = async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findByCredentials(email, password);
    res.sendStatus(200).send(user);
  } catch (e) {
    res.sendStatus(400);
  }
};

const getUser = async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(500).send(e);
  }
};

const getUserById = async (req, res) => {
  const _id = req.params.id;
  try {
    const userById = await User.findById(_id);
    if (!userById) {
      return res.sendStatus(404).send();
    }
    res.send(userById);
  } catch (e) {
    res.status(500).send(e);
  }
};
const deleteUserById = async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findByIdAndDelete(_id);
    if (!user) {
      return res.sendStatus(404).send();
    }
    res.send(user);
  } catch (e) {
    res.status(500).send(e);
  }
};
module.exports = {
  createUser,
  userLogin,
  getUser,
  getUserById,
  deleteUserById
};
