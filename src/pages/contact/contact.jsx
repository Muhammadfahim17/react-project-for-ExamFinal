import React from 'react'
import strelki from '../../assets/Frame 31.svg'
import bg from '../../assets/BG 2.svg'
import pic1 from '../../assets/Frame 1321315021.svg'
import pic2 from '../../assets/Frame 1321315058.svg'
import pic3 from '../../assets/Frame 1321315061.svg'
import pizza from '../../assets/pizza.avif'
import pic4 from '../../assets/Arrow.svg'
import Component3 from '../about/component3'


const Contact = () => {

	return (
		<div>
      <Component3/>
			<div className='bg-[#070707] pb-[50px] lg:pb-[100px]'>
				<div className='w-[90%] m-auto '>
						<div className='py-[50px] lg:py-[100px]'>
							<h2 className='text-center text-white text-[25px] lg:text-[55px]'>
								<span className='text-[#FFC62B]'>
									THE FOOD WAS ABSOLUTELY OUTSTANDING, AND THE SERVICE WAS
									EXCEPTIONAL!{' '}
								</span>
								EVERY DETAIL CONTRIBUTED TO AN UNFORGETTABLE EVENING. CAN’T WAIT
								TO RETURN ANOTHER AMAZING EXPERIENCE
							</h2>
							<div>
								<h5 className='text-white text-center text-[20px]'>
									Sarah Hamilton
								</h5>
                 <div className="flex w-[70%] my-[50px] mx-auto items-center ">
              <img
                className="w-[320px] h-[280px] rounded-xl relative z-[0] rotate-[-10deg]"
                src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtbBoESC-0jPlLGkoQB1eydQ_ZrZfmETtCWg&s`}
                alt=""
              />
              <img
                className="w-[385px] h-[380px] rounded-xl z-10"
                src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzMkisvOSNTuhrLzyZlWlejdvK4Rqu6fLEeA&s`}
                alt=""
              />
              <img
                className="w-[320px] h-[280px] rounded-xl rotate-[10deg]"
                src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtbBoESC-0jPlLGkoQB1eydQ_ZrZfmETtCWg&s`}
                alt=""
              />
            </div>
								<img
									src={strelki}
									alt='pic'
									className='mx-auto mt-[10px] pt-[50px] lg:pt-[100px]'
								/>
							</div>
						</div>
						<div className='pt-[50px] lg:pt-[100px]'>
							<h3 className='text-center text-white text-[22px] lg:text-[40px]'>
								See What Others Are <br />
								Saying About Us!
							</h3>
							<p className='text-center text-white pt-[20px]'>
								Explore our integrated Google and Yelp reviews, showcasing
								genuine feedback from <br />
								clients who experienced our exceptional service and
								unforgettable events
							</p>
							<div className='text-center mt-[20px]'>
								<button className='text-[#FFCD51] bg-[#C31E26] py-[5px] px-[20px] rounded-[5px] '>
									See More
								</button>
							</div>
						</div>
            
					</div>
          <div className='mt-[50px] lg:mt-[100px] lg:flex justify-end gap-[40px]'>
              <img src={pic1} alt="pic" />
              <img src={pic2} alt="pic" />
              <img src={pic3} alt="pic" className='hidden lg:flex'/>
            </div>
				
			</div>
      <img src={pizza} alt="pic" width="100%"/>
      <div className='px-[5%] m-auto bg-[#C31E26] py-[30px] lg:py-[70px] text-white'>
        <h4 className='text-[20px] lg:text-[32px]'>
          “When a leading tech company approached us to host their annual corporate retreat, they wanted to create an event that would inspire creativity and strengthen team bonds. Our team worked closely with their organizers to understand their goals and vision”
        </h4>
        <h5 className='text-[20px] lg:text-[24px] py-[20px]'><em>Michael Richard Klein</em></h5>
        <p>A successful entrepreneur managing operations across various industries and sectors</p>

      </div>
      <div className='bg-[#FFC62B]'>
        <div  className='pt-[50px] lg:pt-[100px] text-center lg:text-start lg:flex justify-between items-center gap-[70px] px-[5%]'>
          <h3 className='text-[25px] lg:text-[40px]'>Your Questions Answered, Enjoy a Seamless Experience!</h3>
          <div className='lg:w-[500px]'>
            <p className='py-[20px] lg:py-0'>Explore our FAQs to find answers to common inquiries, ensuring a smooth and enjoyable dining experience for all our guests</p>
            <button className='text-[#FFCD51] bg-[#C31E26] py-[5px] px-[20px] rounded-[5px] lg:mt-[20px]'>
									See More
								</button>
          </div>
        </div>
        <div>
          <div>
           
            
          </div>
        </div>
      </div>

		</div>
	)

  return (
    <>
      
    </>
  )

}

export default Contact
