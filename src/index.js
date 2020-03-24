const express = require("express");
var morgan = require("morgan");

require("./db/mongoose"); // this allows us to make sure we're connecting to the DB
const {
  createUser,
  getUser,
  getUserById,
  deleteUserById
} = require("./controllers/usersController");
const {
  createImage,
  getImage,
  getImageById,
  deleteImageById
} = require("./controllers/imagesController");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
// it parses incoming json to a JS object
app.use(morgan("dev"));

// endpoints

// USERS
app.post("/users", createUser);
app.get("/users", getUser);
app.get("/users/:id", getUserById);
app.delete("/users/:id", deleteUserById);

// IMAGES
app.post("/images", createImage);
app.get("/images", getImage);
app.get("/images/:id", getImageById);
app.delete("/images/:id", deleteImageById);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
