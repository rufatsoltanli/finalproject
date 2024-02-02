import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { CarsRouter } from './src/Router/CarsRouter'


const app = express()
const port = 3000
app.use(express.json())

app.use("/cars/", CarsRouter)

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => console.log('Connected!'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})