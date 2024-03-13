import express from "express";
import { addShoesController } from "../controllers/shoesController.js";

const router = express.Router();

router.post("/shoes", addShoesController);


export default router;
