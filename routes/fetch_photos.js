const express = require("express");
const photos_model = require("../models/photos");
const route = express.Router();

route.get("/", async (req, res) => {
  const photos = await photos_model.find();
  res.json(photos);
});

module.exports = route;
