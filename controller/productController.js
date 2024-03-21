var productmodel = require('../Model/productModel');

exports.insertData = async (req, res) => {
  var productData = await productmodel.create(req.body);
  res.status(200).json({
    productData
  })
};

exports.getData = async (req, res) => {
  var productData = await productmodel.find();
  res.status(200).json({
    productData
  });
};
