// import express from "express";
// import dotenv from 'dotenv';
// dotenv.config();
// const { PORT, mongoDBURL } = process.env;
// import mongoose from "mongoose";
// import catchLogsRoute from "./routes/catchLogsRoute.js";
// import cors from "cors";

// import authRoute from './routes/AuthRoute.js';
// import cookieParser from "cookie-parser";

// const app = express();

// // Middleware for parsing request body 
// app.use(cookieParser());
// app.use(express.json());
// // app.use(cookieParser());

// // Middleware for handling CORS policy

// app.use(cors());
// // OR
// // app.use(
// //     cors({
// //         origin: "http://localhost:3000",
// //         methods: ['GET', 'PUT', 'POST', 'DELETE'],
// //         allowedHeaders: ['Content-Type'],
// //     })
// // );

// app.get('/', (request, response) => {
//     console.log(request);
//     return response.status(234).send("MERN Stack Intro");
// });

// app.use("/catchLogs", catchLogsRoute);
// app.use("/", authRoute);

// mongoose
//     .connect(mongoDBURL)
//     .then(() => {
//         console.log("App connected to database");
//         app.listen(PORT, () => {
//             console.log(`App is listening to port: ${PORT}`);
//         });
//     })
//     .catch((error) => {
//         console.log(error);
//     });


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

app.use(cors(corsOptions));

app.use(cookieParser());
app.use(express.json());

app.use("/", authRoute);
app.use("/catchLogs", catchLogsRoute);
app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send("MERN Stack Intro");
});