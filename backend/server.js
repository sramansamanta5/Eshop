import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()
import products from './data/products.js';

const Port=process.env.PORT || 3000

const app=express();

app.use(cors())

app.get('/',(req,res)=>{
    res.send("Hello from home page...")
})

app.get('/api/products',(req,res)=>{
    res.json(products)
})

app.get('/api/products/:id',(req,res)=>{
    const Product=products.find((p)=>p._id === req.params.id);
    res.json(Product)
})

app.listen(Port,()=>{
    console.log(`Server running on PORT ${Port}`)
})
