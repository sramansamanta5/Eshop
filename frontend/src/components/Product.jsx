import React from 'react'
import Rating from './Rating'
import { Link } from 'react-router-dom'

const Product = ({product}) => {
    //image 
    //name
    //price
    //m-2 py-8 flex flex-col border-2 border-white shadow-xl justify-center items-center rounded-lg hover:scale-110 duration-300
    //flex flex-col gap-1 justify-center items-center text-white
  return (
    <div className='m-2 p-4 flex flex-col border-2 border-white shadow-xl justify-center items-center rounded-lg hover:scale-110 duration-300'>
     <Link to={`/product/${product._id}`}><div> <img src={product.image} className='h-64 w-64 object-cover rounded-lg'/></div>
       <h1>{product.name}</h1>
       <Rating rating={product.rating} ratingtext={product.numReviews}/>
       <h1>${product.price}</h1></Link>
    </div>
  )
}

export default Product