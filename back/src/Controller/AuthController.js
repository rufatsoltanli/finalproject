import { RentallyUserModel } from "../Model/UserModel.js"
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';


export const registerUser = async (req, res) => {
    try {
        const { username, phone, email, password, role } = req.body
        const hashedPassword = await bcrypt.hash(password, 12)
        console.log(hashedPassword);
        const data = new RentallyUserModel({ username, phone, email, password: hashedPassword, role })
        await data.save()
        const token = jwt.sign({ username, phone, email, role }, process.env.JWT_KET, { expiresIn: "1d" })
        res.json(token)
    } catch (error) {
        res.send(error.message)
    }
}
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await RentallyUserModel.findOne({ email })
        if (!user) {
            return res.send("User is not found")
        }
        console.log(user);
        const hash = await bcrypt.compare(password, user.password)
        console.log(hash);
        if (!hash) {
            return res.status(404).send("Password is not correct")
        }
        const token = await jwt.sign({ email: user.email, role: user.role, username: user.username, id: user._id }, process.env.JWT_KET, { expiresIn: "1d" })
        res.json(token)
    } catch (error) {
        res.send(error.message)
    }
}