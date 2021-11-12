const Product = require("../Modal/product");
module.exports.getProducts = async (req, res) => {
  try {
    const { pageNo, pageSize } = req.query;
    const skipDoc = (pageNo - 1) * pageSize;
    const products = await Product.find({}).skip(skipDoc).limit(2);
    // get all products from db
    return res.status(200).json({
      success: true,
      data: products,
    });
    // return it to user
  } catch (error) {
    return res.status(500).json({ success: false, data: "Server Error" });
  }
};

module.exports.createProducts = async (req, res) => {
  try {
    const products = await Product.create(req.body);
    // get all products from db
    return res.status(201).json({
      success: true,
      data: products,
    });
    // return it to user
  } catch (error) {
    console.log("error crrating product", error);
    return res.status(500).json({ success: false, data: "Server Error" });
  }
};

module.exports.editProducts = async (req, res) => {
  try {
    const product = Product.findById(req.params.id);

    if (!product) {
      return res.status(400).json({
        success: false,
        data: "Invalid Product Id",
      });
    }
    const products = await Product.findByIdAndUpdate(req.params.id, req.body);
    // get all products from db
    return res.status(200).json({
      success: true,
      data: products,
    });
    // return it to user
  } catch (error) {
    console.log("error editing product", error);
    return res.status(500).json({ success: false, data: "Server Error" });
  }
};

module.exports.deleteProducts = async (req, res) => {
  try {
    const product = Product.findById(req.params.id);

    if (!product) {
      return res.status(400).json({
        success: false,
        data: "Invalid Product Id",
      });
    }
    const products = await Product.findByIdAndDelete(req.params.id);
    // get all products from db
    return res.status(200).json({
      success: true,
      data: products,
    });
    // return it to user
  } catch (error) {
    console.log("error editing product", error);
    return res.status(500).json({ success: false, data: "Server Error" });
  }
};
