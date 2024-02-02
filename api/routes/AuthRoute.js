import { Signup, Login } from '../controllers/AuthController.js'
import { userVerification } from '../middlewares/AuthMiddleware.js'
import express from 'express'

export const authRoute = express.Router();

authRoute.post("/signup", Signup);
authRoute.post("/login", Login);
authRoute.post("/", userVerification)


