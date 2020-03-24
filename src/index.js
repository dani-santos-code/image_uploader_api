const express = require("express");
var morgan = require("morgan");

require("./db/mongoose"); // this allows us to make sure we're connecting to the DB
const { User } = require("./models/User");
const { Image } = require("./models/Image");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
// it parses incoming json to a JS object
app.use(morgan("dev"));
app.post("/users", (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then(() => res.send(user))
    .catch(err => res.status(400).send(err));
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
