import express from "express";
import { addUserController } from "../controllers/usersController.js";

const router = express.Router();

router.post("/users", addUserController);

export default router;
