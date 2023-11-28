import mongoose from "mongoose";

const dateLogSchema = mongoose.Schema(
    {
        date: {
            type: Date,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

export const DateLog = mongoose.model('DateLog', dateLogSchema);
