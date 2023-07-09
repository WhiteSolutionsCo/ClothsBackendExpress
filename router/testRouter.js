const express = require("express");

const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/categories" });

router.post("/", upload.single("avatar"), (req, res, next) => {
  console.log(req.file);
});

module.exports = router;
