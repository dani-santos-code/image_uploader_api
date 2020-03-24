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
  deleteUser
} = require("../controllers/usersController");

router
  .post("/users", createUser)
  .post("/users/login", userLogin)
  .post("/users/logout", isAuth, userLogout)
  .post("/users/logoutall", isAuth, userLogoutAll)
  .get("/users/me", isAuth, getUserProfile)
  .post(
    "/users/me/upload",
    isAuth,
    upload.array("upload", 6),
    (req, res) => {
      res.send();
    },
    (error, req, res, next) => {
      res.status(400).send({ error: error.message });
    }
  )
  .delete("/users/me", isAuth, deleteUser);

module.exports = router;
