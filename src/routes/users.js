import express from "express";

const router = express.Router();

router.post("/users", (res, req) => {
  res.json("hello to Magno");
});

export default router;
