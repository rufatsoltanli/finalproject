import { Router } from "express"
import { deleteUserByID, getUser, getUserById, postUser, updateUserByID } from "../Controller/UserController.js"

export const UserRouter = Router()

UserRouter.get('/', getUser)

UserRouter.get('/:id', getUserById)

UserRouter.post('/', postUser)

UserRouter.put('/:id', updateUserByID)

UserRouter.delete('/:id', deleteUserByID)