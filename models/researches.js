// Researches.js file

const mongoose = require("mongoose");

const research_schema = mongoose.Schema({
  author: {
    required: true,
    type: String,
    default: "Anonymous",
  },
  img_src: {
    required: true,
    type: String,
  },
  research: {
    required: true,
    type: String,
  },
  heading: {
    required: true,
    type: String,
  },
});

const research_model = mongoose.model("Research", research_schema);
module.exports = research_model;
