const asyncHandler = require("express-async-handler");
const sharp = require("sharp");

const { v4: uuidv4 } = require("uuid");
const { uploadImage } = require("../middlewares/uploadImageMiddleware");
const Category = require("../models/categoriesModel");
const CategoryModel = require("../models/categoriesModel");



const {
  deleteOne,
  updateOne,
  createOne,
  getOne,
  getAll,
} = require("./handlerFactory");

// @desc   Get categories
// @route  GET /api/v1/categories
// @access Private
exports.getCategories = getAll(Category);
// @desc   Get category
// @route  GET /api/v1/categories/:id
// @access Public
exports.getCategory = getOne(Category);
// @desc   Create Category
// @route  POST /api/v1/categories
// @access Private
exports.createCategories = createOne(Category);

// @desc   Update Category
// @route  PUT /api/v1/categories/:id
// @access Private
exports.updateCategory = updateOne(CategoryModel);
// @desc   Delete Category
// @route  DELETE /api/v1/categories/:id
// @access Private
exports.deleteCategory = deleteOne(CategoryModel);
