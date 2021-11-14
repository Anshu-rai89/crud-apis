const request = require("supertest");
const app = require("../../app");

it("returns a 201 on successful signup", async () => {
  return request(app)
    .post("/api/user/register")
    .send({
      name: "anshu",
      email: "test@test.com",
      password: "abc@1234",
    })
    .expect(201);
});
