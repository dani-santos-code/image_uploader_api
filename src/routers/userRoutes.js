// USER ROUTES
const express = require("express");
const router = new express.Router();
const { isAuth } = require("../middleware/auth");
const {
  createUser,
  userLogin,
  userLogout,
  userLogoutAll,
  getUserProfile,
  getUserById,
  deleteUserById
} = require("../controllers/usersController");

router
  .post("/users", createUser)
  .post("/users/login", userLogin)
  .post("/users/logout", isAuth, userLogout)
  .post("/users/logoutall", isAuth, userLogoutAll)
  .get("/users/me", isAuth, getUserProfile)
  .get("/users/:id", isAuth, getUserById)
  .delete("/users/:id", isAuth, deleteUserById);

module.exports = router;
