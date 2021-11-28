const productModel = require("../models/productModel");
const ProductModel = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");

//Create Product --Admin
exports.createProduct = async (req, res) => {
  const product = await ProductModel.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
};

// Get All Products
exports.getAllProducts = async (req, res) => {
  const product = await ProductModel.find({});
  res.status(201).json({
    success: true,
    product,
  });
};

// Update Product
exports.updateProducts = async (req, res, next) => {
  let product = await ProductModel.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }
  product = await productModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    success: true,
    product,
  });
};

// Delete Products
exports.deleteProducts = async (req, res, next) => {
  const product = await ProductModel.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }
  await product.remove();
  res.status(201).json({
    success: true,
    product: "Product Delete Successfully",
  });
};

// get signal Products
exports.getProductDetails = async (req, res, next) => {
  const product = await ProductModel.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }
  res.status(201).json({
    success: true,
    product,
  });
};
