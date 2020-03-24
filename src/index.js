const express = require("express");
const morgan = require("morgan");
const multer = require("multer");
const userRouter = require("./routers/userRoutes");
const imageRouter = require("./routers/imageRoutes");
require("./db/mongoose"); // this allows us to make sure we're connecting to the DB

const app = express();
const port = process.env.PORT || 3000;

const uploadSingle = multer({
  dest: "images"
});

app.post("/upload", uploadSingle.single("upload"), (req, res) => {
  res.sendStatus(200);
});

app.use(express.json()); // it parses incoming json to a JS object
app.use(morgan("dev"));

app.use(userRouter);
app.use(imageRouter);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
