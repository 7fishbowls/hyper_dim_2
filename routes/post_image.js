const express = require("express");
const photos_model = require("../models/photos");
const route = express.Router();
route.use(express.json());

route.post("/", async (req, res) => {
  data = { ...req.body, name: "Nebulae" };
  await photos_model.create(data);
  res.json({ message: "OK" });
});

module.exports = route;
