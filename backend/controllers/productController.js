import asyncHandler from "../middleware/asyncHandler";
import Product from "../models/ProductModel";

//access-public
//fetch all products
//route-api/products
const getProducts = asyncHandler( async ()=>{
    const products=await Product.find({});
    res.json(products)
})


//access-public
//fetches sindle product
//route-api/products/:id

const getProductById= asyncHandler( async ()=>{
    const product=await Product.findById(req.params.id)
    
    if(product){
        res.json(product);
    }
    else{
        res.status(404);
        throw new Error('Resorce not found')
    }

   
})

export {getProductById,getProducts}

