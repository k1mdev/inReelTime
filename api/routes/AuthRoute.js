import { Signup, Login } from "../controllers/AuthController.js";
import express from "express";
import { userVerification } from "../middlewares/AuthMiddleware.js";

export const authRoute = express.Router();

authRoute.post("/signup", Signup);
authRoute.post("/login", Login);
authRoute.post("/", userVerification)


