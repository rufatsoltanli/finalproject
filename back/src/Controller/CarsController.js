import { RentallyCars } from "../Model/CarsModel"


export const getCars = async (req, res) => {
    try {
        const data = await RentallyCars.find({})
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
}
export const getCarsById = async (req, res) => {
    try {
        const { id } = req.params
        const data = await RentallyCars.findBy({})
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
}

export const postCars = async (req, res) => {
    try {
        const { price, type, year, fuel, description, color } = req.body
        const data = new RentallyCars({ price, type, year, fuel, description, color })
        await data.save()
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
}

export const updateCarByID = async (req, res) => {
    try {
        const { id } = req.params
        const { price, type, year, fuel, description, color } = req.body
        const data = await RentallyCars.findByIdAndUpdate(id, { price, type, year, fuel, description, color })
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
}

export const deleteCarByID = async (req, res) => {
    try {
        const { id } = req.params
        const data = await RentallyCars.findByIdAndDelete(id)
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
}
