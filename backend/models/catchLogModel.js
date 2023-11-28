import mongoose from "mongoose";

const catchLogSchema = mongoose.Schema(
    {
        species: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        length: {
            type: Number,
            required: false,
        },
        lure: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true,
    }
);

export const CatchLog = mongoose.model('CatchLog', catchLogSchema);
