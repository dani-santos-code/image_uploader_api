const express = require("express");
var morgan = require("morgan");

require("./db/mongoose"); // this allows us to make sure we're connecting to the DB
const {
  createUser,
  getUser,
  getUserById
} = require("./controllers/usersController");
const { createImage } = require("./controllers/imagesController");
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

app.post("/images", createImage);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
