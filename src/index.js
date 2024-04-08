import express from "express";
import db from "./config/db.js";

import shoesRouter from "./routes/shoes.js";
import usersRouter from "./routes/users.js"
import loginRouter from "./routes/auth.js"

const app = express();
app.use(express.json());

app.use("/api", shoesRouter);
app.use("/api", usersRouter);
app.use("/api", loginRouter);

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
