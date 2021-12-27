const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const passport = require("./config/passportJwt");

app.use(express.json());
app.use(passport.initialize());
app.use("/api", require("./routes"));

module.exports = app;
