const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("Hi"));
router.use("/user", require("./user"));
router.use("/product", require("./product"));

module.exports = router;
