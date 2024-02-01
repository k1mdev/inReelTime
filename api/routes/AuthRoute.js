import { Signup, Login } from "../controllers/AuthController.js";
import express from "express";
import { userVerification } from "../middlewares/AuthMiddleware.js";

export const authRouter = express.Router();

authRouter.post("/signup", Signup);
authRouter.post("/login", Login);
authRouter.post("/", userVerification)


