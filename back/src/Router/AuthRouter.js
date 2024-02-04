import { Router } from "express"
import { loginUser, registerUser } from "../Controller/AuthController.js"

export const AuthRouter = Router()


AuthRouter.post('/register/', registerUser)

AuthRouter.post('/login/', loginUser)