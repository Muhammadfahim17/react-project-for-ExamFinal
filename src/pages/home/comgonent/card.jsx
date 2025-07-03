import React from 'react'
import img1 from '../images/img1 (6).jpg'
import  img2 from '../images/img1 (5).png'

const CompS1 = () => {
  return (
    <div className='flex justify-around py-[50px]'>
        <div className='group w-[22%] '>
            <div className=''>
                <img src={img1} alt="" className='w-[100%] h-[450px] rounded-[10px]'/>
            </div>
            <div className='block group-hover:hidden p-[10px]'>
                <p className='font-medium text-2xl'>Truffle-infused Wagyu Delight</p>
                <p>Succulent Wagyu steak drizzled with aromatic truffle sauce, served with buttery mashed potatoes.</p>
            </div>
                <div className='hidden group-hover:block bg-[#FFC62B] text-black my-[10px] rounded-[10px] p-[10px] '>
                    <p className='font-medium text-2xl my-[10px]'>Ocean Symphony Risotto</p>
                    <p>Creamy saffron-infused risotto with fresh lobster, scallops, and prawns, finished with parmesan and herbs    </p>
                    <img src={img2} alt="" />
                </div>
        </div>
        <div className='group w-[22%] '>
            <div className=''>
                <img src={img1} alt="" className='w-[100%] h-[450px] rounded-[10px]'/>
            </div>
            <div className='block group-hover:hidden p-[10px]'>
                <p className='font-medium text-2xl'>Truffle-infused Wagyu Delight</p>
                <p>Succulent Wagyu steak drizzled with aromatic truffle sauce, served with buttery mashed potatoes.</p>
            </div>
                <div className='hidden group-hover:block bg-[#FFC62B] text-black my-[10px] rounded-[10px] p-[10px] '>
                    <p className='font-medium text-2xl my-[10px]'>Ocean Symphony Risotto</p>
                    <p>Creamy saffron-infused risotto with fresh lobster, scallops, and prawns, finished with parmesan and herbs    </p>
                    <img src={img2} alt="" />
                </div>
        </div>
        <div className='group w-[22%] '>
            <div className=''>
                <img src={img1} alt="" className='w-[100%] h-[450px] rounded-[10px]'/>
            </div>
            <div className='block group-hover:hidden p-[10px]'>
                <p className='font-medium text-2xl'>Truffle-infused Wagyu Delight</p>
                <p>Succulent Wagyu steak drizzled with aromatic truffle sauce, served with buttery mashed potatoes.</p>
            </div>
                <div className='hidden group-hover:block bg-[#FFC62B] text-black my-[10px] rounded-[10px] p-[10px] '>
                    <p className='font-medium text-2xl my-[10px]'>Ocean Symphony Risotto</p>
                    <p>Creamy saffron-infused risotto with fresh lobster, scallops, and prawns, finished with parmesan and herbs    </p>
                    <img src={img2} alt="" />
                </div>
        </div>
        <div className='group w-[22%] '>
            <div className=''>
                <img src={img1} alt="" className='w-[100%] h-[450px] rounded-[10px]'/>
            </div>
            <div className='block group-hover:hidden p-[10px]'>
                <p className='font-medium text-2xl'>Truffle-infused Wagyu Delight</p>
                <p>Succulent Wagyu steak drizzled with aromatic truffle sauce, served with buttery mashed potatoes.</p>
            </div>
                <div className='hidden group-hover:block bg-[#FFC62B] text-black my-[10px] rounded-[10px] p-[10px] '>
                    <p className='font-medium text-2xl my-[10px]'>Ocean Symphony Risotto</p>
                    <p>Creamy saffron-infused risotto with fresh lobster, scallops, and prawns, finished with parmesan and herbs    </p>
                    <img src={img2} alt="" />
                </div>
        </div>
    </div>
  )
}

export default CompS1