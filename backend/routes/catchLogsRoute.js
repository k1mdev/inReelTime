import express from "express";
import { CatchLog } from "../models/catchLogModel.js";

const router = express.Router();

// Route for saving new Catch
router.post('/', async (request, response) => {
    try {
        if (
            !request.body.species ||
            !request.body.date
        ) {
            return response.status(400).send({
                message: "Send all required fields: species, date",
            });
        }
            
        const newCatchLog = {
            user: request.body.user,
            species: request.body.species,
            date: request.body.date,
            length: request.body.length,
            weight: request.body.weight,
            lure: request.body.lure,
            location: request.body.location,
        }

        const catchLog = await CatchLog.create(newCatchLog);
        return response.status(201).send(catchLog);
    }
    catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

// Route for getting all catches from DB
router.get("/", async (request, response) => {
    try {
        const catchLog = await CatchLog.find({});
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
// Route for getting catches by user
// router.get("/user/:curUser", async (request, response) => {
//     try {
//         const { curUser } = request.params;
//         const catchLog = await CatchLog.find({user: curUser});
//         return response.status(200).json({
//             count: catchLog.length,
//             data: catchLog,
//         });
//     }
//     catch (error) {
//         console.log(error.message);
//         response.status(500).send({message: error.message});
//     }
// });

// Route for getting one catch from DB by ID
router.get("/id/:id", async (request, response) => {
    try {
        const { id } = request.params;
        const catchLog = await CatchLog.findById(id);
        return response.status(200).json(catchLog);
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
                message: "Send all required fields: species, date",
            });
        }
        const { id } = request.params;
        const result = await CatchLog.findByIdAndUpdate(id, request.body);
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

// Route for deleting catch
router.delete("/:id", async (request, response) => {
    try {
        const { id } = request.params;
        const result = await CatchLog.findByIdAndDelete(id);
        if (!result) {
            return response.status(404).json({ message: "Catch not found" });
        }
        return response.status(200).send({ message: "Catch deleted successfully" });
    }
    catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

export default router;