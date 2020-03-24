// USER ROUTES
const express = require("express");
const router = new express.Router();

const {
  createUser,
  userLogin,
  getUser,
  getUserById,
  deleteUserById
} = require("../controllers/usersController");

router
  .post("/users", createUser)
  .post("/users/login", userLogin)
  .get("/users", getUser)
  .get("/users/:id", getUserById)
  .delete("/users/:id", deleteUserById);

module.exports = router;
