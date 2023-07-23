const mongo = require("mongoose");

const categorySchema = mongo.Schema(
  {
    name: {
      type: String,
      required: [true, "title is required"],
      minlength: [3, "too short product title"],
    },
    slug: {
      type: String,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const CategoryModel = mongo.model("category", categorySchema);

module.exports = CategoryModel;
