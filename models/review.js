const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = Schema({
  rating: Number,
  body: String,
});

module.exports = mongoose.model("Review", reviewSchema);
