const request = require("supertest");
const app = require("../src/app");

test("Should sign up a new user", async () => {
  console.log(process.env.MONGODB_URL);
  await request(app)
    .post("/users")
    .send({
      name: "Dani",
      email: "dani@dani.com",
      password: "passTest678"
    })
    .expect(201);
});
