const { User } = require("../models/User");

const createUser = async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findByCredentials(email, password);
    const token = await user.generateAuthToken();
    res.status(200).send({ user, token });
  } catch (e) {
    res.sendStatus(400);
  }
};

const userLogout = async (req, res) => {
  console.log("CALLED");
  try {
    // here we are removing the currentToken from the users array
    req.user.tokens = req.user.tokens.filter(token => {
      return token.token !== req.token;
    });
    await req.user.save();
    // here we are updating the User object with the tokens left
    res.send();
  } catch (e) {
    res.sendStatus(500).send();
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

const getUserProfile = async (req, res) => {
  res.send(req.user);
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
  userLogout,
  getUserProfile,
  getUserById,
  deleteUserById
};
