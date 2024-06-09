const express = require("express");
const formidable = require("express-formidable");

const {
  validateToken,
  isAdmin,
} = require("../middlewares/validateTokenHandler");
const {
  createProductController,
  getProductsController,
  getProductController,
  productPhotoController,
} = require("../controllers/productController");

const router = express.Router();

router.post(
  "/create-product",
  validateToken,
  isAdmin,
  formidable(),
  createProductController
);

router.get("/get-products", getProductsController);

router.get("/product-photo/:pid", productPhotoController);

router.get("/get-product/:slug", getProductController);

module.exports = router;
