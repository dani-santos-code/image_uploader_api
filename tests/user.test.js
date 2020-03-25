const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../src/app");

const userOne = {
  name: "Penelope Cruz",
  email: "penny@cruz.com",
  password: "passTes82t68"
};

beforeEach(async () => {
  await mongoose.model("user").deleteMany();
  await mongoose.model("user").create(userOne);
  // tearing down the DB
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

test("Should not log in non existing user", async () => {
  await request(app)
    .post("/users/login")
    .send({
      email: "wrongemail@wrong.com",
      password: "6ahjYSgK"
    })
    .expect(400);
});
