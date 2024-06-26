import express from 'express'
import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/ProductModel.js';





const router=express.Router();



router.get('/',asyncHandler(async(req,res)=>{
    const products=await Product.find({});
    res.json(products)
}))

router.get('/:id',asyncHandler(async(req,res)=>{
    const product=await Product.findById(req.params.id)
    
    if(product){
        res.json(product);
    }
     else{
        res.status(404);
        throw new Error('Resorce not found')
    }

}))


export default router