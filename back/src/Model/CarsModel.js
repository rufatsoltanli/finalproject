import mongoose, { Schema } from "mongoose";



const rentallyCars = new Schema({
    price: Number,
    type: String,
    year: Number,
    fuel: String,
    description: String,
    color: String,
    wishlistCount: {
        type: Number,
        default: 0,
    },
});

export const RentallyCars = mongoose.model('RentallyCars', rentallyCars);

