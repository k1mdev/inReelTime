import mongoose from "mongoose";

const catchLogSchema = mongoose.Schema(
    {
        user: {
            type: String,
            required: true,
        },
        species: {
            type: String,
            required: true,
        },
        date: {
            // Date stored in ISO string format YYYY-MM-DD
            type: String,
            required: true,
        },
        length: {
            type: Number,
            required: false,
        },
        weight: {
            type: Number,
            required: false,
        },
        lure: {
            type: String,
            required: false,
        },
        location: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true,
    }
);

export const CatchLog = mongoose.model('CatchLog', catchLogSchema);
