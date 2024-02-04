import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { CarsRouter } from './src/Router/CarsRouter.js'
import 'dotenv/config'
import { UserRouter } from './src/Router/UserRouter.js'
import { AuthRouter } from './src/Router/AuthRouter.js'

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(cors())
app.use("/cars/", CarsRouter)
app.use("/users/", UserRouter)
app.use("/", AuthRouter)


mongoose.connect(process.env.DB_KEY)
    .then(() => console.log('Connected!'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})