const express = require("express");

const router = express.Router();

const {
  uploadProductImages,
  resizeProductsImages,
  createProduct,
} = require("../services/productServices");
router
  .route("/")
  // .post(uploadProductImages, resizeProductsImages, createProduct);
  .post((req, res, next) => {
    console.log("kfljdsafasfdsafdsfdsa");
  }, createProduct);
module.exports = router;
