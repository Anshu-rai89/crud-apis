const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require("mongoose");
const app = require("../app");

let mongo = new MongoMemoryServer();

console.log("mongo is", mongo.getUri[0]);
beforeAll(async () => {
  const mongouri = await mongo.getUri();
  console.log("uri is", mongouri);
  await mongoose.connect(mongouri, {
    serverSelectionTimeoutMS: 5000,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();
  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  await mongo.stop();
  await mongoose.connection.close();
});
