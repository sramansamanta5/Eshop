import React, { useEffect, useState } from 'react'
import axios from 'axios'
//import products from '../products'
import Product from '../components/Product'
import Imageslider from '../components/Imageslider'


const HomeScreen = () => {
  
const [products,setProducts]=useState([])
  //Implement lazy loading
  //Implement skeleton loading.        ----> take help from blogrocket skeleton loading website. 
  //Implement sliding animation to omageslider component.
  //Position the prev and next image behind the current like twitch.
 /*
    { products.map((product)=>{
            return <Product product={product} key={product._id}/>
           })}
 
 */
useEffect(()=>{
 
  axios.get('http://localhost:4000/api/products')
  .then((res)=>{setProducts(res.data)})
  
},[])


  return (
    <div className='p-4'>
      <Imageslider/>
        <h1 className='text-xl text-[#2a722a93]'>Latest Products</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
        { products.map((product)=>{
            return <Product product={product} key={product._id}/>
           })}
        </div>
    </div>
  )
}

export default HomeScreen