import React from 'react'
import Component1 from '../about/component1'
import CompS1 from './comgonent/card'
import img7 from './images/img1 (4).png'

const Home2 = () => {
  return (
    <div>
      <Component1 />
      <div className='bg-black text-white py-[50px]'>
      <div className=' flex  items-center justify-around pb-[50px]'>
        <div className='w-[40%]'>
          <p className='font-black text-4xl my-[20px]'>Our Signature Menu</p>
          <p>Experience our signature menu, a masterpiece of flavors crafted with premium ingredients, culinary expertise, and an artistic touch to delight</p>
        </div>
        <div>
          <img src={img7} alt="" />
        </div>
      </div>
      <CompS1 />
      <div className='text-center py-[50px]'>
      <p className='font-bold text-4xl'>Savor the Flavor, Delight in Every Bite!</p>
      <p className='w-[60%] mx-auto mt-[10px]'>Explore our menu filled with mouthwatering dishes, crafted with passion and the freshest ingredients to satisfy every craving</p>
      <div className='flex justify-center my-[30px] gap-[30px]'>
        <p className='px-[10px] p-[5px] bg-[#C31E26]  rounded-2xl'>Appetizers</p>
        <p className='px-[10px] p-[5px] border border-[#C31E26] rounded-2xl'>Soups & Salads</p>
        <p className='px-[10px] p-[5px] border border-[#C31E26] rounded-2xl'>Main Course</p>
        <p className='px-[10px] p-[5px] border border-[#C31E26] rounded-2xl'>Side Dishes</p>
        <p className='px-[10px] p-[5px] border border-[#C31E26] rounded-2xl'>Desserts</p>
        <p className='px-[10px] p-[5px] border border-[#C31E26] rounded-2xl'>Beverages</p>
      </div>
      </div>
       <CompS1 />
       <CompS1 />
       <CompS1 />
      </div>
    </div>
  )
}

export default Home2