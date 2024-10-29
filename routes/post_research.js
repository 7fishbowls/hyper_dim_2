const express = require("express");
const route = express.Router();
const research_model = require("../models/researches");
route.use(express.json());

route.post("/", (req, res) => {
  res.send("Done");
  research_model.create(req.body);
});

module.exports = route;
