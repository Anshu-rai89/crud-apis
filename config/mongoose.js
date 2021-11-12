const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const mongo_uri = process.env.MONGO_URI;

mongoose.connect(mongo_uri);

const db = mongoose.connection;

db.once("error", (error) => console.error("Error connecting to DB", error));
db.once("open", () => console.log("Coonected to DB"));

module.exports = db;
