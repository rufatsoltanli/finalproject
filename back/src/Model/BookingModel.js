import mongoose, { Schema } from "mongoose";

const rentallyBookingScheme = new Schema({
    pickUpLocation: String,
    dropOffLocation: String,
    day: Number,
    chosenCarName: String,
    status: { type: String, default: "Waiting" },
    bookerUsername: String
});

export const RentallyBookingModel = mongoose.model('RentallyBooking', rentallyBookingScheme);

