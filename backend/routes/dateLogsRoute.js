import express from "express";
import { DateLog } from "../models/dateLogModel";

const router = express.Router();

// Route for saving new Catch
router.post('/', async (request, response) => {
    try {
        if (
            !request.body.species ||
            !request.body.date
        ) {
            return response.status(400).send({
                message: "Send all required fields: date",
            });
        }
            
        const newDateLog = {
            species: request.body.species,
            date: request.body.date,
            length: request.body.length,
            lure: request.body.lure,
        }

        const dateLog = await DateLog.create(newDateLog);
        return response.status(201).send(dateLog);
    }
    catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

// Route for getting all catches from DB
router.get("/", async (request, response) => {
    try {
        const dateLog = await DateLog.find({});
        return response.status(200).json({
            count: dateLog.length,
            data: dateLog,
        });
    }
    catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

// Route for getting one catch from DB by ID
router.get("/:id", async (request, response) => {
    try {
        const { id } = request.params;
        const dateLog = await DateLog.findById(id);
        return response.status(200).json(dateLog);
    }
    catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

// Route for updating catch
router.put("/:id", async (request, response) => {
    try {
        if (
            !request.body.species ||
            !request.body.date
        ) {
            return response.status(400).send({
                message: "Send all required fields: date",
            });
        }
        const { id } = request.params;
        const result = await DateLog.findByIdAndUpdate(id, request.body);
        if (!result) {
            return response.status(404).json({ message: "Date not found" });
        }
        return response.status(200).send({ message: "Date updated successfully" });
    }
    catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

// Route for deleting catch
router.delete("/:id", async (request, response) => {
    try {
        const { id } = request.params;
        const result = await DateLog.findByIdAndDelete(id);
        if (!result) {
            return response.status(404).json({ message: "Date not found" });
        }
        return response.status(200).send({ message: "Date deleted successfully" });
    }
    catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

export default router;