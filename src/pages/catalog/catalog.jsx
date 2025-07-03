// import React from 'react'

// const Catalog = () => {
//   return (
//     <div>Catalog</div>
//   )
// }

// export default Catalog



import img1 from '../../assets/Arrow.png'
import sigmaBoy from '../../assets/sigma-sigma-boy.png'
import sigmaBoy2 from '../../assets/sigmaboy2.jpeg'
import sigmaBoy3 from '../../assets/sigmaBoy3.webp'
import img2 from '../../assets/Frame 2018.png'
import img3 from '../../assets/Rectangle 120.png'
import img4 from '../../assets/sushi.webp'
export default function Home() {
    return (
        <>


            <section className='bg-[#FFC62B] w-[100%] lg:h-[1000px] py-[50px]'>
                <div className='flex w-[90%] m-auto  flex-col lg:flex-row justify-between items-center'>
                    <h1 className="font-bold text-[40px] lg:w-[700px]  ">Unforgettable Events, Perfectly Curated for You</h1>
                    <div className="lg:w-[400px]">
                        <h1 >Elevate your celebrations with customized event packages, exquisite catering, and seamless service for a truly memorable experience</h1>
                        <Button name="See More" />
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row justify-between w-[90%] m-auto mt-[60px] gap-[20px] lg:gap-[1px]'>
                    <aside className="lg:w-[628px] lg:h-[628px] rounded-[10px] flex flex-col gap-[20px] bg-[#FFD45E] p-[20px] ">
                        <Card name=" Customized Catering" />
                        <Card name=" Seamless Planning" />
                        <div className='flex items-start lg:w-[580px] bg-[#C31E26] text-white rounded-[10px] p-[20px]  justify-between'>
                            <div>
                                <h1 className='font-bold text-[20px]'>Exclusive Venues</h1>
                                <p>Our seafood is responsibly sourced to protect marine ecosystems and ensure future generations can enjoy ocean-fresh flavors.</p>
                            </div>
                            <img src={img1} alt="" />
                        </div>
                        {/* <Card name=" Personalized Experience"/> */}
                        <Card name=" Tailored Packages" />
                        <Card name=" Customized Catering" />
                        <Card name=" Memorable Moments" />
                    </aside>
                    <img className='lg:w-[500px] rounded-[10px]' src={sigmaBoy} alt="" />
                </div>

            </section>
            <section className='text-white bg-[#070707] h-[1000px] p-[40px]'>
                <div className='text-center m-auto lg:w-[700px] '>
                    <h1 className='font-bold text-[40px]'> Perfect Events, Any Occasion, Seamlessly Planned for You</h1>
                    <p>From weddings to corporate gatherings, we create unforgettable events with expert planning, stunning venues, and exceptional catering services</p>
                    <div className='flex w-[90%] m-auto gap-[20px]'>
                        <div className='hidden gap-[20px] lg:flex flex-col'>
                            <img className='lg:w-[800px] lg:h-[425px]' src={sigmaBoy2} alt="" />
                            <div className='flex-col lg:flex-row flex gap-[20px]'>
                                <img className='lg:w-[328px] lg:h-[241px]' src={img2} alt="" />
                                <img className='lg:w-[451px] lg:h-[241px]' src={img2} alt="" />
                            </div>

                        </div>
                        <div className='hidden lg:flex flex-col gap-[20px]'>
                            <img className='lg:w-[451px] lg:h-[333px]' src={sigmaBoy3} alt="" />
                            <img className='lg:w-[451px] lg:h-[323px]' src={sigmaBoy3} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-[#070707]  '>
                <h1 className='font-bold text-[50px] lg:w-[800px] m-auto text-white text-center'>Unforgettable Moments, Beautifully Crafted, Memories That Last Forever</h1>

                <div className='overflow-x-scroll flex'>
                    <img className='shrink-0 w-[400px]' src={img3} alt="" />
                    <img className='shrink-0 w-[400px]' src={img3} alt="" />
                    <img className='shrink-0 w-[400px]' src={img3} alt="" />
                    <img className='shrink-0 w-[400px]' src={img3} alt="" />
                    <img className='shrink-0 w-[400px]' src={img3} alt="" />
                    <img className='shrink-0 w-[400px]' src={img3} alt="" />
                </div>

                <div className='lg:w-[600px] m-auto text-center text-white mt-[100px] flex flex-col gap-[20px] justify-center items-center'>
                    <h1 className='font-bold text-[30px]'> Elegant Anniversary Dinner</h1>
                    <p>A beautifully curated private dining experience celebrating a couple’s milestone anniversary. The evening featured a gourmet five-course meal, candlelit ambiance, and live acoustic music.</p>
                    <Button name="See More" />
                </div>

                <div className='lg:flex-row flex-col text-white flex lg:gap-[20px] mt-[50px]'>
                    <img src={img4} className='lg:w-[771px] lg:h-[1000px] rounded-[10px]' alt="" />
                    <aside className='lg:w-[600px] flex flex-col gap-[20px]'>
                        <h1 className='font-bold text-[40px]'>Your Event, Our Priority</h1>
                        <p>Have questions about your event? Fill out our dedicated form, and our team will assist you with personalized solutions</p>
                        <div className='flex-col lg:flex-row flex gap-[20px]'>
                            <div className='flex flex-col gap-[10px]'>
                                <p className='font-semibold text-[20px]'>First name</p>
                                <input type="text" className='lg:w-[296px] h-[74px] rounded-[10px] w-[370px] bg-[gray] p-[20px] placeholder:text-white' placeholder='Tell us who you are' />
                            </div>
                            <div className='flex flex-col gap-[10px]'>
                                <p className='font-semibold text-[20px]'>Last name</p>
                                <input type="text" className='lg:w-[296px] h-[74px] rounded-[10px] w-[370px] bg-[gray] p-[20px] placeholder:text-white' placeholder='Tell us who you are' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-[10px]'>
                            <p className='font-semibold text-[20px]'>Last name</p>
                            <input type="text" className='lg:w-[613px] h-[74px] rounded-[10px] w-[370px] bg-[gray] p-[20px] placeholder:text-white' placeholder='Tell us who you are' />
                        </div>
                        <div className='flex flex-col gap-[10px]'>
                            <p className='font-semibold text-[20px]'>Last name</p>
                            <textarea type="text" className='lg:w-[613px] w-[370px]  h-[274px] rounded-[10px] bg-[gray] p-[20px] placeholder:text-white' placeholder='Tell us who you are' />
                        </div>
                        <button className='bg-[#C31E26] border border-[#D34C27] rounded-[10px] lg:w-[613px] w-[370px]  h-[46px] text-white'>Send to Us</button>
                        <h1 className='text-center'>By Contacting us, you agree to our <span className='text-[red]'> Terms</span> of service and <span className='text-[red]'> privacy Policy</span></h1>
                        <h1 className='font-semibold text-[20px] text-center '>2025 Eato, All right reserved</h1>
                    </aside>

                </div>

            </section>



        </>
    )
}




function Button(props) {
    return (
        <button className='bg-[#C31E26] border border-[#D34C27] rounded-[10px] text-[#FFC62B] w-[130px] h-[36px] '>{props.name}</button>
    )
}

function Card(props) {
    return (
        <div className="bg-[#FFDE85] lg:w-[580px] flex justify-between h-[68px]  items-center p-[10px] rounded-[10px] text-[20px]">
            <h1>{props.name}</h1>
            <img src={img1} alt="" />
        </div>
    )
}


