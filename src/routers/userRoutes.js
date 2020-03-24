// USER ROUTES
const express = require("express");
const router = new express.Router();

const {
  createUser,
  getUser,
  getUserById,
  deleteUserById
} = require("../controllers/usersController");

router
  .post("/users", createUser)
  .get("/users", getUser)
  .get("/users/:id", getUserById)
  .delete("/users/:id", deleteUserById);

module.exports = router;
