import express from "express";
import db from "./config/db.js";

import shoesRouter from "./routes/shoes.js";
import usersRouter from "./routes/users.js"

const app = express();
app.use(express.json());

app.use("/api", shoesRouter);
app.use("/api", usersRouter);

async function syncDB() {
  try {
    await db.sync();
    console.log("it worked");
  } catch (error) {
    console.log(error);
  }
}

syncDB();

app.listen(3004, () => {
  console.log("hello");
});
