import express from "express";
import db from "./config/db.js";

const app = express();
app.use(express.json());

async function syncDB() {
  try {
    await db.sync();
    console.log("it worked");
  } catch (error) {
    console.log(error);
  }
}

syncDB();

app.get("/shoes", (req, res) => {
  res.json("hello shoes");
});

app.listen(3000, () => {
  console.log("hello");
});
