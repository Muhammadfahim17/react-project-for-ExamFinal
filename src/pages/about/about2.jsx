import React, { useState } from "react";

import img1 from "./images/vegetables-salad.png";
import img2 from "./images/Frame 15.png";

import img6 from "./images/Ellipse 2.png";
import Component2 from "./component2";

const About2 = () => {
  let [salJav, setsalJav] = useState([
    {
      s1: " Locally Sourced Ingredients",
    },
  ]);

  let [openJavob, setopenJavob] = useState(null);

  function tongleSavol(index) {
    setopenJavob(openJavob == index ? null : index);
  }

  return (
    <div>
      <section className="bg-[#C31E26] pt-20 h-[115vh]">
        <h1 className="text-[#FFC62B] text-[64px] font-bold text-center m-auto w-4/5  leading-[70px] py-5">
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
            <p className="text-[#FFC62B] text-[14px]">
              Explore our diverse menu, carefully curated for every taste.
              Select your favorite dishes and indulge in a delightful experience
            </p>
            <div className="flex items-center gap-5 py-5">
              <button className="bg-[#FFC62B] text-[#C31E26] rounded py-1 text-[14px] font-medium px-4 ">
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

      <Component2 />

      <section className="relative bg-black text-white py-10 p-10 flex items-start ">
        <img className="absolute z-1 top-0 left-0" src={img6} alt="" />
        <div className="w-2/5 relative top-0 z-2">
          <p className="text-[48px] font-semibold">
            Fresh, Ethical, Sustainable Food
          </p>
          <p className="text-[14px] ">
            We source responsibly, support local farmers, and embrace
            sustainability to ensure fresh, high-quality ingredients for a
            healthier planet
          </p>
        </div>

        <div className="bg-[#FFFFFF1F] p-5 w-3/5 rounded-2xl">
          {salJav.map((e, index) => (
            <div>
              <button
                onClick={() => tongleSavol(index)}
                className="text-2xl font-medium bg-[#FFFFFF3D] flex items-center justify-between w-full p-2 px-5 rounded-xl"
              >
                {e.s1}
                <span
                  className={`transition-transform duration-300 ${
                    openJavob === index ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 w-[15px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
              {openJavob == index && (
                <div className="text-[13px] text-gray-600 mt-2">
                  <p>"Sustainable Seafood",</p>
                  <p>
                    "Our seafood is responsibly sourced to protect marine
                    ecosystems and ensure future generations can enjoy
                    ocean-fresh flavors.",
                  </p>
                  <img
                    src="https://bkt-akps.ru/images/kurs_dop_big/DOP/Evropeyskaya__kuhnya.jpg"
                    alt=""
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About2;
