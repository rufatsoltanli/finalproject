import { Router } from "express"
import { deleteCarByID, getCars, getCarsById, postCars, updateCarByID } from "../Controller/CarsController.js"
import { authMiddleware } from "../Middleware/AuthMiddleware.js"

export const CarsRouter = Router()

CarsRouter.get('/', getCars)

CarsRouter.get('/:id', getCarsById)

CarsRouter.post('/', authMiddleware(["Admin"]), postCars)

CarsRouter.put('/:id', authMiddleware(["Admin"]), updateCarByID)

CarsRouter.delete('/:id', authMiddleware(["Admin"]), deleteCarByID)