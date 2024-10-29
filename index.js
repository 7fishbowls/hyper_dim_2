const express = require("express");
const connectDB = require("./config/connectdb");
const cors = require("cors");
const fetch_researches = require("./routes/fetch_researches");
const fetch_photos = require("./routes/fetch_photos");
const post_research = require("./routes/post_research");
const post_image = require("./routes/post_image");

const app = express();
app.use(cors());
connectDB();

app.get("/", (req, res) => {
  res.send("Hello world!");
});
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.use("/fetch_researches", fetch_researches);
app.use("/fetch_photos", fetch_photos);
app.use("/post_research", post_research);
app.use("/post_image", post_image);

app.listen(5000);
