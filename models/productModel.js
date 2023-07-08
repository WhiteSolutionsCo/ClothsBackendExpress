const mongo = require("mongoose");

const productSchema = mongo.Schema(
  {
    title: {
      type: String,
      required: [true, "title is required"],
      minlength: [3, "too short product title"],
    },
    price: {
      type: Number,
      required: [true, "price is required"],
      max: [2000000, "price is too high"],
    },
    coverImage: { type: String, required: [true, "cover image is required"] },
    images: [String],
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const setImageURL = (doc) => {
  if (doc.coverImage) {
    const newURL = `${process.env.BASE_URL}/products/${doc.coverImage}`;
    doc.coverImage = newURL;
  }
  if (doc.images) {
    const newImagesURL = [];
    doc.images.forEach((val) => {
      newImagesURL.push(`${process.env.BASE_URL}/products/${val}`);
    });

    doc.images = newImagesURL;
  }
};
productSchema.post("init", (doc) => {
  setImageURL(doc);
});

productSchema.post("save", (doc) => {
  setImageURL(doc);
});
const ProductModel = mongo.model("product", productSchema);

module.exports = ProductModel;
