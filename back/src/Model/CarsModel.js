import mongoose, { Schema } from "mongoose";

const rentallyCarsScheme = new Schema({
    price: Number,
    type: String,
    year: Number,
    fuel: String,
    description: String,
    image: String,
    color: String,
    name:String,
});

export const RentallyCarsModel = mongoose.model('RentallyCars', rentallyCarsScheme);

