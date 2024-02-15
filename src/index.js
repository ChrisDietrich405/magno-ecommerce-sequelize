const express = require("express");

const app = express();
app.use(express.json());

app.get("/shoes", (req, res) => {
  res.json("hello shoes");
});

app.listen(3000, () => {
  console.log("hello");
});
