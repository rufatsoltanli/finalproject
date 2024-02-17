import { RentallyUserModel } from "../Model/UserModel.js"


export const getUser = async (req, res) => {
    try {
        const data = await RentallyUserModel.find({})
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
}
export const getUserById = async (req, res) => {
    try {
        const { id } = req.params
        const data = await RentallyUserModel.findById(id)
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
}

export const postUser = async (req, res) => {
    try {
        const { username, email, password, phone, name } = req.body
        const data = new RentallyUserModel({ username, email, password, phone, name })
        await data.save()
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
}

export const updateUserByID = async (req, res) => {
    try {
        const { id } = req.params
        const { username, email, password, phone, name } = req.body
        const data = await RentallyUserModel.findByIdAndUpdate(id, { username, email, password, phone, name })
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
}

export const deleteUserByID = async (req, res) => {
    try {
        const { id } = req.params
        const data = await RentallyUserModel.findByIdAndDelete(id)
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
}
