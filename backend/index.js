import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send("Mern Stack Intro");
});

// Route for saving new Catch
app.post('/catches', async (request, response) => {
    try {
        if (
            !request.body.species ||
            !request.body.date
        ) {
            return response.status(400).send({
                message: "Send all required fields: species, date",
            });
        }
            
        const newCatch = {
            species: request.body.species,
            date: request.body.date,
            length: request.body.length,
            lure: request.body.lure,
        }

        const catchLog = await Catch.create(newCatch);
        return response.status(201).send(catchLog);
    }
    catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

// Route for getting all catches from DB
app.get("/catches", async (request, response) => {
    try {
        const catchLog = await Catch.find({});
        return response.status(200).json({
            count: catchLog.length,
            data: catchLog,
        });
    }
    catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

// Route for getting one catch from DB by ID
app.get("/catches/:id", async (request, response) => {
    try {
        const { id } = request.params;
        const catchLog = await Catch.findById(id);
        return response.status(200).json(catchLog);
    }
    catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

// Route for updating catch
app.get("/catches/:id", async (request, response) => {
    try {
        if (
            !request.body.species ||
            !request.body.date
        ) {
            return response.status(400).send({
                message: "Send all required fields: species, date",
            });
        }
        const { id } = request.params;
        const result = await Catch.findByIdAndUpdate(id, request.body);
        if (!result) {
            return response.status(404).json({ message: "Catch not found" });
        }
        return response.status(200).send({ message: "Catch updated successfully" });
    }
    catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

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
















