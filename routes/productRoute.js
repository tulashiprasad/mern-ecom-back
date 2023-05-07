const router = require("express").Router();
const Product = require("../models/productModel");
const authMiddleware = require("../middlewares/authMiddleware");
// add products to the database

router.post("/add-product", authMiddleware, async (req, res) => {
  try {
    const newProduct = await Product(req.body);
    await newProduct.save();
    res.send({
      success: true,
      message: "Products added sucessfully",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

// get product

router.get("/get-product", async (req, res) => {
  try {
    const product = await Product.find().sort({ createdAt: -1 });
    res.send({
      success: true,
      message: "Products fetched sucessfully",
      data: product,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

// edit product

router.put("/edit-product/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log("id", id);
    const data = req.body;
    await Product.findByIdAndUpdate(id, data);
    res.send({
      success: true,
      message: "Product sucessfully updated",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

// delete product

router.delete("/delete-product/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log("id", id);
    const product = await Product.findById({ _id: id });
    if (product) {
      await Product.findByIdAndDelete(id);
      res.send({
        success: true,
        message: "Product sucessfully deleted",
      });
    } else {
      throw new Error("Product doesnot Exists");
    }
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});
module.exports = router;
