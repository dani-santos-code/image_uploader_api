const express = require("express");
const morgan = require("morgan");
const userRouter = require("./routers/userRoutes");
const imageRouter = require("./routers/imageRoutes");
require("./db/mongoose"); // this allows us to make sure we're connecting to the DB

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // it parses incoming json to a JS object
app.use(morgan("dev"));

app.use(userRouter);
app.use(imageRouter);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
