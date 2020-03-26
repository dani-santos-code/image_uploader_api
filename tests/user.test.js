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
    .post("/api/v1/users")
    .send({
      name: "Mark Ronson",
      email: "mark@mark.com",
      password: "passTest678"
    })
    .expect(201);
});

test("Should log in existing user", async () => {
  await request(app)
    .post("/api/v1/users/login")
    .send({
      email: userOne.email,
      password: userOne.password
    })
    .expect(200);
});

test("Should now allow non-existing user", async () => {
  await request(app)
    .post("/api/v1/users/login")
    .send({
      email: "wrongemail@wrong.com",
      password: "6ahjYSgK"
    })
    .expect(400);
});

test("Should get profile for given user", async () => {
  await request(app)
    .get("/api/v1/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);
});

test("Should not get profile if no token is provided", async () => {
  await request(app)
    .get("/api/v1/users/me")
    .send()
    .expect(401);
});

test("Should not get profile if token is invalid", async () => {
  await request(app)
    .get("/api/v1/users/me")
    .set("Authorization", `Bearer 8*dadjzdshusgfa`)
    .send()
    .expect(401);
});

test("Should delete account for authenticated user", async () => {
  await request(app)
    .delete("/api/v1/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200, { message: `Successfully deleted ${userOne.name}.` });
});

test("Should not delete account if not account owner", async () => {
  await request(app)
    .delete("/api/v1/users/me")
    .set("Authorization", `Bearer 9q827sha8dyasdsa`)
    .send()
    .expect(401);
});
