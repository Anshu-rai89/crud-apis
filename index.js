const express = require("express");
const initiliseDB = require("./config/mongoose");
const dotenv = require("dotenv").config();
const port = process.env.PORT;
const app = express();
const db = require("./config/mongoose");
const passport = require("./config/passportJwt");

app.use(express.json());
app.use(passport.initialize());
app.use("/api", require("./routes"));

app.listen(port, () => console.log("Server is Running at", port));
