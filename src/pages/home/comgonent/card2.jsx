import React from 'react'
import img1 from '../images/img1 (10).jpg'
import './Card.css'

const CardS2 = () => {
  return (
    <div className='text-center py-[50px] box flex-shrink-0'>
        <div className='w-[25%] '>
            <img src={img1} alt="" className='rounded-r-2xl'/>

        <p className='font-bold text-2xl'>Olivia Martinez</p>
        <p>Pastry Chef</p>
        <button className='bg-red-600 p-[10px] px-[30px] rounded-[10px] text-white'>Discover More</button>
        </div>
        <div className='w-[25%] '>
            <img src={img1} alt="" className='rounded-r-2xl'/>

        <p className='font-bold text-2xl'>Olivia Martinez</p>
        <p>Pastry Chef</p>
        <button className='bg-red-600 p-[10px] px-[30px] rounded-[10px] text-white'>Discover More</button>
        </div>
        <div className='w-[25%] '>
            <img src={img1} alt="" className='rounded-r-2xl'/>

        <p className='font-bold text-2xl'>Olivia Martinez</p>
        <p>Pastry Chef</p>
        <button className='bg-red-600 p-[10px] px-[30px] rounded-[10px] text-white'>Discover More</button>
        </div>
        <div className='w-[25%] '>
            <img src={img1} alt="" className='rounded-r-2xl'/>

        <p className='font-bold text-2xl'>Olivia Martinez</p>
        <p>Pastry Chef</p>
        <button className='bg-red-600 p-[10px] px-[30px] rounded-[10px] text-white'>Discover More</button>
        </div>
    </div>
  )
}

export default CardS2