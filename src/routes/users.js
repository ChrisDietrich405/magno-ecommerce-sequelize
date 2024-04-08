import express from "express";
import { createAccountController } from "../controllers/usersController.js";

const router = express.Router();

router.post("/users", createAccountController);

export default router;
