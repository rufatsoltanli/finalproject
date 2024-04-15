import { Router } from "express"
import { approveBookingByID, cancelBookingByID, deleteBookingByID, getBooking, getBookingById, postBooking, updateBookingByID } from "../Controller/BookingController.js"
import { authMiddleware } from "../Middleware/AuthMiddleware.js"

export const BookingRouter = Router()

BookingRouter.get('/', authMiddleware(["User", "Admin"]), getBooking)

BookingRouter.get('/:id', authMiddleware(["User", "Admin"]), getBookingById)

BookingRouter.post('/', authMiddleware(["User", "Admin"]), postBooking)

BookingRouter.put('/:id', authMiddleware(["Admin"]), updateBookingByID)

BookingRouter.delete('/:id', authMiddleware(["Admin"]), deleteBookingByID)

BookingRouter.put('/approveBooking/:id', authMiddleware(["Admin"], approveBookingByID))

BookingRouter.put('/cancelBooking/:id', authMiddleware(["Admin"], cancelBookingByID))