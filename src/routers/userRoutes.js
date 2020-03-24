// USER ROUTES
const express = require("express");
const router = new express.Router();
const { isAuth } = require("../middleware/auth");
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
  .get("/users", isAuth, getUser)
  .get("/users/:id", isAuth, getUserById)
  .delete("/users/:id", isAuth, deleteUserById);

module.exports = router;
