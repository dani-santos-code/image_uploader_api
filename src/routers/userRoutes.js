// USER ROUTES
const express = require("express");
const router = new express.Router();
const { isAuth } = require("../middleware/auth");
const { upload } = require("../middleware/upload");
const {
  createUser,
  userLogin,
  userLogout,
  userLogoutAll,
  getUserProfile,
  uploadImages,
  deleteUser
} = require("../controllers/usersController");

router
  .post("/users", createUser)
  .post("/users/login", userLogin)
  .post("/users/logout", isAuth, userLogout)
  .post("/users/logoutall", isAuth, userLogoutAll)
  .get("/users/me", isAuth, getUserProfile)
  .post("/users/me/upload", upload.single("upload"), uploadImages)
  .delete("/users/me", isAuth, deleteUser);

module.exports = router;
