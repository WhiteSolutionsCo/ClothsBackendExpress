const express = require("express");

const router = express.Router();

const {
  uploadProductImages,
  resizeProductsImages,
  createProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../services/productServices");
// uploadProductImages, resizeProductsImages,
router.route("/").post(createProduct).get(getAllProducts);
router.route("/:id").get(getProduct).put(updateProduct).delete(deleteProduct);

module.exports = router;
