const express = require("express");

const router = express.Router();

const {
  createProduct,
  uploadProductImages,
  resizeProductsImages,
} = require("../services/productServices");

router
  .route("/")
  .post(uploadProductImages, resizeProductsImages, createProduct);

module.exports = router;
