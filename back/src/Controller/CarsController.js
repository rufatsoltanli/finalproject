import { RentallyCarsModel } from "../Model/CarsModel.js"


export const 

getCars = async (req, res) => {
    try {
        const data = await RentallyCarsModel.find({})
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
}
export const getCarsById = async (req, res) => {
    try {
        const { id } = req.params
        const data = await RentallyCarsModel.findById(id)
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
}

export const postCars = async (req, res) => {
    try {
        const { price, type, year, fuel, description, color, image, name,interiorColor } = req.body
        const data = new RentallyCarsModel({ price, type, year, fuel, description, color, image, name,interiorColor })
        await data.save()
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
}

export const updateCarByID = async (req, res) => {
    try {
        const { id } = req.params
        const { price, type, year, fuel, description, color, image, name,interiorColor } = req.body
        const data = await RentallyCarsModel.findByIdAndUpdate(id, { price, type, year, fuel, description, color, image, name,interiorColor })
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
}

export const deleteCarByID = async (req, res) => {
    try {
        const { id } = req.params
        const data = await RentallyCarsModel.findByIdAndDelete(id)
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
}

