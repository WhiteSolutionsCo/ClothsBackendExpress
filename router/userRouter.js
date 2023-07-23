const express = require("express");

const router = express.Router();

const {
  createUser,
  getAllUsers,
  updateUser,
  getSingleUser,
  deleteUser,
} = require("../services/userService");
const {
  createUserValidator,
  updateUserValidator,
} = require("../utils/validators/userValidator");

router.route("/").post(createUserValidator, createUser).get(getAllUsers);

router
  .route("/:id")
  .get(getSingleUser)
  .put(updateUserValidator, updateUser)
  .delete(deleteUser);

module.exports = router;
