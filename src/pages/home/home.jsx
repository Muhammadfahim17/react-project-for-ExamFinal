import CardS2 from './comgonent/card2'
import React from 'react'
import img1 from './images/img1 (1).png'
import img3 from './images/img1 (1).jpg'
import img4 from './images/img1 (1).png'
import img2 from './images/img2.png'
import img5 from './images/img1 (3).png'
import img6 from './images/img1.png'
import img7 from './images/img1 (4).png'
import CompS1 from './comgonent/card'
import img8 from './images/img1 (6).png'
import img9 from './images/img1 (7).png'
import img10 from './images/img1 (8).png'
import img11 from './images/img1 (9).png'
import img12 from './images/img1 (6).jpg'
import img13 from './images/img1 (10).png'
import img14 from './images/img1 (11).png'
import img15 from './images/img1 (12).png'

const Home = () => {
  return (
    <div>
      <div className='bg-red-600 text-white'>
        <div className=' flex justify-between ml-[30px] items-center pt-[100px]'>
          <div className='w-[50%]'>
            <p>Number 1 Restaurant in the world</p>
            <p className='font-black text-5xl my-[30px] w-[100%] text-[#FFC62B]'>Savor the rich flavors, delight in every bite,
              enjoy the experience!</p>
            <p>Experience a delightful fusion of flavors, crafted with passion and served with warmth for an unforgettable dining journey</p>
            <div className='flex gap-[20px] my-[30px]'>
              <button className='w-[40%] border p-[10px] font-black rounded-[5px]   bg-[#FFC62B] text-red-600'>View Menu</button>
              <button className='w-[40%] border p-[10px] font-black rounded-[5px]  bg-white text-red-600'>Explore More</button>
            </div>
          </div>
          <div>
            <img src={img2} alt="" className='absolute z-10 m-[20px]' />
            <img src={img6} alt="" className='absolute z-10 ml-[300px] mt-[350px]' />

            <img src={img1} alt="" className='w-[500px] h-[400px]' />
          </div>
        </div>
        <div className='flex gap-[40px] mt-[-30px] mx-[20px] py-[50px]'>
          <div className='flex gap-[30px]'>
            <img src={img3} alt="" className='w-[40%]' />
            <img src={img4} alt="" className='w-[40%]' />
          </div>
          <div className='w-[30%]'>
            <img src={img5} alt="" className='my-[20px]' />
            <p>I love that they offer fresh, I'm so glad I did! The food was phenomenal,healthy options without compromising on taste. The ingredients are always high-quality, and I feel great after every meal!</p>
          </div>
        </div>
      </div>
      <div className='bg-[#070707] text-white'>
        <div className=' flex  items-center justify-around pb-[50px]'>
          <div className='w-[40%]'>
            <p className='font-black text-3xl my-[20px]'>Our Signature Menu</p>
            <p>Experience our signature menu, a masterpiece of flavors crafted with premium ingredients, culinary expertise, and an artistic touch to delight</p>
          </div>
          <div>
            <img src={img7} alt="" />
          </div>
        </div>
        <CompS1 />
        <div >
          <div className='text-center '>
            <p className='font-bold text-4xl w-[60%] my-[20px] mx-auto'>Unmatched Quality, Exceptional Service, Memorable Experience</p>
            <p>We blend premium ingredients, expert craftsmanship, and warm hospitality to create a dining experience that exceeds expectations every time.</p>
          </div>
          <div className='flex items-center justify-around py-[50px]'>
            <div className='grid gap-[20px] w-[25%]'>
              <div className='bg-[#FFC62B]  rounded-[10px] p-[10px]'>
                <img src={img8} alt="" />
                <p className='font-black text-2xl'>Exceptional Quality Ingredients</p>
                <p>We source only the finest, freshest ingredients to ensure every dish bursts with flavor and nutrition. Our skilled chefs bring creativity and passion to every plate, crafting unique and delicious dishes</p>
              </div>
              <div className='bg-[#464646] rounded-[10px] p-[10px]'>
                <img src={img9} alt="" />
                <p className='font-black text-2xl'>Exceptional Quality Ingredients</p>
                <p>We source only the finest, freshest ingredients to ensure every dish bursts with flavor and nutrition. Our skilled chefs bring creativity and passion to every plate, crafting unique and delicious dishes</p>
              </div>
            </div>
            <div className='w-[35%]'>
              <img src={img12} alt="" className='rounded-2xl' />
            </div>
            <div className='grid gap-[20px] w-[25%]'>
              <div className='bg-[#FFC62B]  rounded-[10px] p-[10px]'>
                <img src={img10} alt="" />
                <p className='font-black text-2xl'>Exceptional Quality Ingredients</p>
                <p>We source only the finest, freshest ingredients to ensure every dish bursts with flavor and nutrition. Our skilled chefs bring creativity and passion to every plate, crafting unique and delicious dishes</p>
              </div>
              <div className='bg-[#464646]  rounded-[10px] p-[10px]'>
                <img src={img11} alt="" />
                <p className='font-black text-2xl'>Exceptional Quality Ingredients</p>
                <p>We source only the finest, freshest ingredients to ensure every dish bursts with flavor and nutrition. Our skilled chefs bring creativity and passion to every plate, crafting unique and delicious dishes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#FFC62B] py-[50px'>
        <div className='w-[50%] py-[50px] mx-auto text-center'>
          <p className='font-black text-4xl  '>Passionate Chefs, Dedicated Team – Crafting Culinary Excellence</p>
          <p>Our talented chefs and dedicated team work together to create unforgettable dining experiences with passion, precision, and creativity.</p>
        </div>
        <CardS2 />
      </div>
      <div className='bg-black text-white text-center py-[50px]'>
        <p className='font-bold text-4xl w-[50%] mx-auto'>Unforgettable Moments, Beautifully Crafted, Memories That Last Forever</p>
        <div className="flex  my-[40px] mx-auto items-center ">
          <img
            className="w-[200px] h-[200px] rounded-xl mt-[100px] relative z-[0] rotate-[-7deg]"
            src={img13}
            alt=""
          />
          <img
            className="w-[320px] h-[280px] rounded-xl relative z-20 mr-[-30px] rotate-[-5deg]"
            src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtbBoESC-0jPlLGkoQB1eydQ_ZrZfmETtCWg&s`}
            alt=""
          />
          <img
            className="w-[385px] h-[380px] rounded-xl z-50"
            src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzMkisvOSNTuhrLzyZlWlejdvK4Rqu6fLEeA&s`}
            alt=""
          />
          <img
            className="w-[320px] h-[280px] rounded-xl z-20 rotate-[5deg] ml-[-30px]"
            src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtbBoESC-0jPlLGkoQB1eydQ_ZrZfmETtCWg&s`}
            alt=""
          />
          <img
            className="w-[200px] h-[200px] rounded-xl z-10 mt-[100px] ml-[-30px] rotate-[8deg]"
            src={img13}
            alt=""
          />
        </div>
        <div className='w-[50%] mx-auto'>
          <p className='font-bold text-2xl'> Elegant Anniversary Dinner</p>
          <p>A beautifully curated private dining experience celebrating a couple’s milestone anniversary. The evening featured a gourmet five-course meal, candlelit ambiance, and live acoustic music.</p>
          <button className='bg-red-600 text-white p-[10px] px-[30px] rounded-[5px] my-[20px]'>See More</button>
        </div>
        <div>
          <div className='w-[60%] my-[50px] mx-auto'>
            <p className='font-bold text-4xl'>Delicious Insights, Culinary Tips, and Restaurant News</p>
            <p>Explore our blog for mouthwatering recipes, expert tips, and the latest updates from our restaurant to enhance your dining experience</p>
            <div className='w-[70%] my-[30px] bg-[#4646463D] pl-[10px] flex items-center rounded-[10px] mx-auto'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>

              <input className='w-[100%] p-[10px]' type="text" placeholder='What do you want to know?' />
            </div>
          </div>
          <div className='flex justify-around'>
            <div className='w-[35%] text-start'>
              <img src={img12} alt="" className='rounded-2xl' />
              <div className='flex gap-[20px] my-[20px]'>
                <p className='bg-[#FFC62B] text-red-600 p-[5px] rounded-2xl'>Food Trends</p>
                <p className='bg-[#FFC62B] text-red-600 p-[5px] rounded-2xl'>6 Min Read</p>
              </div>
              <p className='font-bold text-2xl my-[20px]'>The rise of plant-based dining in restaurants reflects health trends and environmental sustainability awareness among consumers</p>
              <p>In recent years, there has been a significant shift towards plant-based dining, driven by health-conscious consumers and growing awareness of environmental sustainability.</p>
            </div>
            <div className=' w-[50%]'>
              <div className='flex w-[100%] gap-[30px]'>
                <div className='w-[80%]'>
                  <img
                    className="w-[100%] h-[100%] rounded-xl "
                    src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzMkisvOSNTuhrLzyZlWlejdvK4Rqu6fLEeA&s`}
                    alt=""
                  />
                </div>
                <div className='text-start'>
                  <p>In recent years, there has been a significant shift towards plant-based dining.</p>
                  <p className='my-[20px]'>In recent years, there has been a significant shift towards plant-based dining, driven by health-conscious consumers and growing awareness of environmental sustainability.</p>
                  <div className='flex gap-[20px] my-[20px]'>
                    <p className='bg-[#FFC62B] text-red-600 p-[5px] rounded-2xl'>Food Trends</p>
                    <p className='bg-[#FFC62B] text-red-600 p-[5px] rounded-2xl'>6 Min Read</p>
                  </div>
                </div>
              </div>
              <div className='flex my-[20px] gap-[30px]'>
                <div className='w-[80%]'>
                  <img
                    className="w-[100%] h-[100%] rounded-xl "
                    src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzMkisvOSNTuhrLzyZlWlejdvK4Rqu6fLEeA&s`}
                    alt=""
                  />
                </div>
                <div className='text-start'>
                  <p>In recent years, there has been a significant shift towards plant-based dining.</p>
                  <p className='my-[20px]'>In recent years, there has been a significant shift towards plant-based dining, driven by health-conscious consumers and growing awareness of environmental sustainability.</p>
                  <div className='flex gap-[20px] my-[20px]'>
                    <p className='bg-[#FFC62B] text-red-600 p-[5px] rounded-2xl'>Food Trends</p>
                    <p className='bg-[#FFC62B] text-red-600 p-[5px] rounded-2xl'>6 Min Read</p>
                  </div>
                </div>
              </div>
              <div className='flex my-[20px] gap-[30px]'>
                <div className='w-[80%]'>
                  <img
                    className="w-[100%] h-[100%] rounded-xl "
                    src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzMkisvOSNTuhrLzyZlWlejdvK4Rqu6fLEeA&s`}
                    alt=""
                  />
                </div>
                <div className='text-start'>
                  <p>In recent years, there has been a significant shift towards plant-based dining.</p>
                  <p className='my-[20px]'>In recent years, there has been a significant shift towards plant-based dining, driven by health-conscious consumers and growing awareness of environmental sustainability.</p>
                  <div className='flex gap-[20px] my-[20px]'>
                    <p className='bg-[#FFC62B] text-red-600 p-[5px] rounded-2xl'>Food Trends</p>
                    <p className='bg-[#FFC62B] text-red-600 p-[5px] rounded-2xl'>6 Min Read</p>
                  </div>
                </div>
              </div>
              <div className='flex my-[20px] gap-[30px]'>
                <div className='w-[80%]'>
                  <img
                    className="w-[100%] h-[100%] rounded-xl "
                    src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzMkisvOSNTuhrLzyZlWlejdvK4Rqu6fLEeA&s`}
                    alt=""
                  />
                </div>
                <div className='text-start'>
                  <p>In recent years, there has been a significant shift towards plant-based dining.</p>
                  <p className='my-[20px]'>In recent years, there has been a significant shift towards plant-based dining, driven by health-conscious consumers and growing awareness of environmental sustainability.</p>
                  <div className='flex gap-[20px] my-[20px]'>
                    <p className='bg-[#FFC62B] text-red-600 p-[5px] rounded-2xl'>Food Trends</p>
                    <p className='bg-[#FFC62B] text-red-600 p-[5px] rounded-2xl'>6 Min Read</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Home