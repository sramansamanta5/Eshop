import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import { notFound,errorHandler } from './middleware/errorMiddleware.js'
dotenv.config()

import productRoutes from './routes/productRoutes.js'

const Port=process.env.PORT || 3000

connectDB();

const app=express();

app.use(cors())

app.get('/',(req,res)=>{
    res.send("Hello from home page...")
})

app.use('/api/products',productRoutes)

app.use(notFound);
app.use(errorHandler)


app.listen(Port,()=>{
    console.log(`Server running on PORT ${Port}`)
})
