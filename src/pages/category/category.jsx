import React from 'react'
// import component1 from './../about/component1';
import Component3 from '../about/component3'
import image1 from '../../pages/category/img category/turkey.png'
import image2 from '../../pages/category/img category/turkey1.png'


const Category = () => {
  return (
    <div>
      
     <Component3/>



      <div className='border bg-[#070707] text-white flex justify-between items-center'>
      <img className='h-[850px] w-[600px]' src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiNkY8-4UvzY2mk-yp54kSyRkzvq72uaxgHA&s`} alt="" />
      <div className='w-[650px] flex flex-col items-start gap-[35px]'>
        <h1 className='w-[450px] text-[40px] font-[700]'>A Special Treat for 
        First-Time Guests!</h1>
        <p className='w-[580px]'>Are you visiting our restaurant for the first time? We have a special treat just for you! Enjoy an exclusive [X]% discount on your very first order, whether you choose to dine in or order online. It’s our way of saying welcome and thank you for trying our delicious dishes. From mouthwatering appetizers to delightful main courses, every bite is crafted to impress.</p>
        <div className='flex items-center gap-[10px]'>
          <div className='w-[290px] bg-[#4c4c4c] p-[15px] rounded-xl flex flex-col items-start gap-[10px]'>
          <img src={image1} alt="" />
          <h2 className='font-bold text-[18px]'> Exclusive Welcome Discount</h2>
          <p>Enjoy [X]% off your first order, whether you dine in or order online!</p>
          </div>
          <div className='w-[290px] bg-[#4c4c4c] p-[15px] rounded-xl flex flex-col items-start gap-[10px]'>
          <img src={image2} alt="" />
          <h2 className='font-bold text-[18px]'> Exclusive Welcome Discount</h2>
          <p>Enjoy [X]% off your first order, whether you dine in or order online!</p>
          </div>
        </div>
      <button className='text-[#C31E26] font-[500] bg-[#FFC62B] rounded-xl px-[25px] py-[8px]'>Book Reservation</button>
      </div>
      </div>


      <div className='w-[100%] flex '>
        <div className='bg-[#C31E26] w-[50%] text-white p-[20px] flex flex-col items-start justify-around'>
        <p className='text-[#EBEBEB] border px-[35px] py-[8px] rounded-xl'>Events & Private Dining</p>
        <h1 className='w-[620px] text-[35px] font-[500]'>Join us in celebrating life’s special moments with exceptional food and unforgettable experiences together!</h1>
        <p className='font-[500]'>Whether it’s a birthday, anniversary, corporate gathering, or any special occasion, our restaurant offers the perfect setting for your event</p>
        <button className='text-[#C31E26] font-[500] bg-[#FFC62B] rounded-xl px-[45px] py-[8px]'>See More</button>
        </div>
        <img className='w-[50%]' src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRufLsI15KxKN9IE8nVKVo6w1-CHx159_bEUQ&s`} alt="" />
      </div>

    </div>
  )
}

export default Category