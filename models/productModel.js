const mongoose = require("mongoose");

const prodctSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    catagory: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    accessoriesAvailable: {
      type: Boolean,
      required: true,
      default: false,
    },
    boxAvailable: {
      type: Boolean,
      required: true,
      default: false,
    },
    warrantyAvailable: {
      type: Boolean,
      required: true,
      default: false,
    },
    billAvailable: {
      type: Boolean,
      required: true,
      defaulet: false,
    },
    image: {
      type: Array,
      required: true,
      default: [],
    },
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    status: {
      type: String,
      default: "pending",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("product", prodctSchema);
module.exports = Product;
