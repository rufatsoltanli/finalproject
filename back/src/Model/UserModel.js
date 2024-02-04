import mongoose, { Schema } from "mongoose";

const rentallyUserScheme = new Schema({
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: String,
    role: {
        type: String,
        default: "User",
    },
});

export const RentallyUserModel = mongoose.model('RentallyUser', rentallyUserScheme);

