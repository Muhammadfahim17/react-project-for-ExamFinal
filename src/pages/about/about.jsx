import React from "react";

import img1 from "./images/vegetables-salad.png";
import img2 from "./images/Frame 15.png";

const About = () => {
  return (
    <div>
      <section className="bg-[#FFC62B] pt-20 h-[115vh]">
        <h1 className="text-[#C31E26] text-[64px] font-bold text-center m-auto w-4/5  leading-[70px] py-5">
          Discover, Select, Enjoy – Your Perfect Choice Awaits
        </h1>

        <div className="w-[50%] h-[455px] m-auto relative ">
          <div className="flex flex-col items-center p-3 rounded-2xl absolute z-1 top-10 -left-28 bg-white">
            <img src={img1} alt="" />
            <p className="text-[16px] font-semibold ">100% High Quality</p>
            <p className="text-[12px] font-normal ">
              best quality raw materials
            </p>
          </div>

          <img
            className="w-full h-full object-cover"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Sarmalute_mamaliguta.JPG/1024px-Sarmalute_mamaliguta.JPG"
            alt=""
          />
          <div className=" absolute z-1 top-20 -right-80 w-6/10 px-2.5">
            <p className="text-[#C31E26] text-[14px]">
              Explore our diverse menu, carefully curated for every taste.
              Select your favorite dishes and indulge in a delightful experience
            </p>
            <div className="flex items-center gap-5 py-5">
              <button className="bg-[#C31E26] text-[#FFC62B] rounded py-1 text-[14px] font-medium px-4 ">
                View Menu
              </button>
              <button className="bg-white text-[#C31E26] rounded py-1 text-[14px] font-medium px-4 ">
                Explore More
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center p-3 rounded-2xl absolute z-1 bottom-10 -right-28 bg-white">
            <img src={img2} alt="" />
            <p className="text-[18px] font-medium ">Michelin Star</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
