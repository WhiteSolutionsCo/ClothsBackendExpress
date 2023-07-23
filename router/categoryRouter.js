const express = require("express");

const {
  getCategoryValidator,
  updateCategoryValidator,
  deleteCategoryValidator,
  createCategoryValidator,
} = require("../utils/validators/categoryValidator");
const {
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory,
  createCategories,
} = require("../services/categoriesService");

const { protect } = require("../services/authService");

const router = express.Router();

router.route("/").get(getCategories).post(
  protect,
  createCategoryValidator,
  createCategories
);
router
  .route("/:id")
  .get(getCategoryValidator, getCategory)
  .delete(deleteCategoryValidator, deleteCategory)
  .put(updateCategoryValidator, updateCategory);

module.exports = router;
