import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Catch } from "./models/catchModel.js";
import catchesRoute from "./routes/catchesRoute.js";

const app = express();

// Middleware for parsing request body 
app.use(express.json());

// Middleware for handling CORS policy
app.use(
    cors({
        origin: "http://localhost:3000",
        methods: ['GET', 'PUT', 'POST', 'DELETE'],
        allowedHeaders: ['Content-Type'],
    })
);

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send("MERN Stack Intro");
});

app.use("/catches", catchesRoute);

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
















