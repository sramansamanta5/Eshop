import React, { useState } from 'react'
import { images } from './imagedata'

const Imageslider = () => {
    
    const [currentindex,setCurrentindex]=useState(0)

    const gotoNext=()=>{
      const islastindex=currentindex===images.length-1;
      const newindex=islastindex?0:currentindex+1
      setCurrentindex(newindex)
    }
    const gotoPrev=()=>{
        const isfirstindex=currentindex===0;
        const newindex=isfirstindex?images.length-1:currentindex-1
        setCurrentindex(newindex)
      }
  return (
    <div className='m-2 p-3 flex justify-center items-center'>
       <button className='rounded-full bg-black  p-2 text-white' onClick={gotoPrev}>Prev</button>
       <div><img className='w-64 h-48 ' src={currentindex===0?images[images.length-1].image:images[currentindex-1].image}/></div>
       <div><img className='w-96 h-64 ' src={images[currentindex].image}/></div>
       <div><img className='w-64 h-48 ' src={currentindex===images.length-1?images[0].image:images[currentindex+1].image}/></div>
       <button className='rounded-full bg-black p-2 text-white' onClick={gotoNext}>Next</button>
    </div>
  )
}

export default Imageslider