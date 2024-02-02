import { Router } from "express"
import { deleteCarByID, getCars, getCarsById, postCars, updateCarByID } from "../Controller/CarsController"

export const CarsRouter = Router()

CarsRouter.get('/', getCars)

CarsRouter.get('/:id', getCarsById)

CarsRouter.post('/', postCars)

CarsRouter.put('/:id', updateCarByID)

CarsRouter.delete('/:id', deleteCarByID)