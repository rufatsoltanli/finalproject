import { Router } from "express"
import { deleteUserByID, getBookingsOfUsers, getUser, getUserById, postUser, updateUserByID } from "../Controller/UserController.js"
import { authMiddleware } from "../Middleware/AuthMiddleware.js"

export const UserRouter = Router()

UserRouter.get('/', authMiddleware(["User", "Admin"]), getUser)

UserRouter.get('/:id', authMiddleware(["User", "Admin"]), getUserById)

UserRouter.post('/', authMiddleware(["Admin"]), postUser)

UserRouter.put('/:id', authMiddleware(["Admin"]), updateUserByID)

UserRouter.get('/getBookings/:id', authMiddleware(["Admin", "User"]), getBookingsOfUsers)

UserRouter.delete('/:id', authMiddleware(["Admin"]), deleteUserByID)
