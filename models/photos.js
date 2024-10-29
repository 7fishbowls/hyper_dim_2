// Researches.js file

const mongoose = require("mongoose");

const photos_schema = mongoose.Schema({
  name: String,
  img_src: String,
});

const photos_model = mongoose.model("Photo", photos_schema);
module.exports = photos_model;
