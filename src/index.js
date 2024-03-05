import express from "express";
import db from "./config/db.js";

import shoesRouter from "./routes/shoes.js";

const app = express();
app.use(express.json());

app.use("/api", shoesRouter);

async function syncDB() {
  try {
    await db.sync();
    console.log("it worked");
  } catch (error) {
    console.log(error);
  }
}

syncDB();

app.listen(3000, () => {
  console.log("hello");
});
