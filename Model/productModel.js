var mongoose = require('mongoose');

var productschema = new mongoose.Schema({
  title: {type: String},
  image: {type: String},
});

module.exports = mongoose.model("product",productschema);