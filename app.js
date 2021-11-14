const express = require("express");

const dotenv = require("dotenv").config();

const app = express();
const passport = require("./config/passportJwt");

app.use(express.json());
app.use(passport.initialize());
app.use("/api", require("./routes"));

module.exports = app;
