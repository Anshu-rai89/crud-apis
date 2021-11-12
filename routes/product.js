const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const passport = require("passport");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  productController.getProducts
);
router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  productController.createProducts
);
router.put(
  "/edit/:id",
  passport.authenticate("jwt", { session: false }),
  productController.editProducts
);
router.delete(
  "/delete/:id",
  passport.authenticate("jwt", { session: false }),
  productController.deleteProducts
);
module.exports = router;
