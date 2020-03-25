const request = require("supertest");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const app = require("../src/app");

const userOneId = new mongoose.Types.ObjectId();
const userOne = {
  _id: userOneId,
  name: "Meredith Brooks",
  email: "meredith@brooks.com",
  password: "passs7ss82t68",
  tokens: [{ token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET) }]
};

beforeEach(async () => {
  await mongoose.model("user").deleteMany(); // tearing down the DB
  await mongoose.model("user").create(userOne);
});

test("Should sign up a new user", async () => {
  await request(app)
    .post("/users")
    .send({
      name: "Mark Ronson",
      email: "mark@mark.com",
      password: "passTest678"
    })
    .expect(201);
});

test("Should log in existing user", async () => {
  await request(app)
    .post("/users/login")
    .send({
      email: userOne.email,
      password: userOne.password
    })
    .expect(200);
});

test("Should now allow non-existing user", async () => {
  await request(app)
    .post("/users/login")
    .send({
      email: "wrongemail@wrong.com",
      password: "6ahjYSgK"
    })
    .expect(400);
});

test("Should get profile for given user", async () => {
  await request(app)
    .get("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);
});
