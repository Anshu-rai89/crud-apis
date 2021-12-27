const app = require("../../app");
const request = require("supertest");

it("Signup user expect 200", async () => {
  return request(app)
    .post("/api/user/register")
    .send({
      name: "anshu",
      email: "test@test.com",
      password: "test@test123",
    })
    .expect(200);
});

it("Signup user expect 200", async () => {
  return request(app)
    .post("/api/user/login")
    .send({
      email: "tes@test.com",
      password: "test@test123",
    })
    .expect(400);
});
