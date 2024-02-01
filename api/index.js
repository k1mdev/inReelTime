import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoute from "./routes/AuthRoute.js";
import catchLogsRoute from "./routes/catchLogsRoute.js";

dotenv.config();

const app = express();
const { mongoDBURL, PORT } = process.env;

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("App connected to database");
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });

// app.use(
//   cors({
//     origin: ["http://localhost:5555"],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
};

// app.use(cors(corsOptions));

app.use(cookieParser());
app.use(express.json());

app.use("/api", authRoute);
app.use("/api/catchLogs", catchLogsRoute);
app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send("MERN Stack Intro");
});