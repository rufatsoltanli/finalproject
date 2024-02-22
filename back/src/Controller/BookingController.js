import { RentallyBookingModel } from "../Model/BookingModel.js"
import { RentallyUserModel } from "../Model/UserModel.js"
import jwt from "jsonwebtoken"


export const getBooking = async (req, res) => {
    try {
        const data = await RentallyBookingModel.find({})
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
}
export const getBookingById = async (req, res) => {
    try {
        const { id } = req.params
        const data = await RentallyBookingModel.findById(id)
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
}

export const postBooking = async (req, res) => {
    try {

        const token = req.headers.authorization
        const decoded = jwt.verify(token, process.env.JWT_KET)
        const userId = decoded._id
        const user = await RentallyUserModel.findOne({ email: decoded.email })
        const { pickUpLocation, dropOffLocation, chosenCarName, day, bookerUsername, status } = req.body
        const data = new RentallyBookingModel({ pickUpLocation, dropOffLocation, chosenCarName, day, bookerUsername, status })
        await data.save()
        user.bookings.push(data._id)
        await user.save()
        res.send(data)
    } catch (error) {
        res.send(error.message)
        console.log(error.message);
    }
}

export const updateBookingByID = async (req, res) => {
    try {
        const { id } = req.params
        const { pickUpLocation, dropOffLocation, chosenCarName, day, bookerUsername, status } = req.body
        const data = await RentallyBookingModel.findByIdAndUpdate(id, { pickUpLocation, dropOffLocation, chosenCarName, day, bookerUsername, status })
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
}

export const deleteBookingByID = async (req, res) => {
    try {
        const { id } = req.params
        const data = await RentallyBookingModel.findByIdAndDelete(id)
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
}

export const approveBookingByID = async (req, res) => {
    try {
        const { id } = req.params
        const data = await RentallyBookingModel.findByIdAndUpdate(id, {  status:"Completed" })
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
}

export const cancelBookingByID = async (req, res) => {
    try {
        const { id } = req.params
        const data = await RentallyBookingModel.findByIdAndUpdate(id, {  status:"Canceled" })
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
}