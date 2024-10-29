// fetch_researches.js

const express = require("express");
const route = express.Router();
const research_model = require("../models/researches");

route.get("/", async (req, res) => {
  const researches = await research_model.find();
  res.json(researches);
});

module.exports = route;
