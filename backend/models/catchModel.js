import mongoose from "mongoose";

const catchSchema = mongoose.Schema(
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

export const Catch = mongoose.model('Cat', catchSchema);
