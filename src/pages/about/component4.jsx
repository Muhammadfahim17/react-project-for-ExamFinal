import React, { useState } from "react";
import img6 from "./images/Ellipse 2.png";

const component4 = () => {
  let salJav = [
    { s1: "Locally Sourced Ingredients" },
    { s1: "Eco-Friendly Packaging" },
    { s1: "Minimizing Food Waste" },
    { s1: "Ethical Farming Practices" },
  ];

  let [openJavob, setopenJavob] = useState(null);

  function tongleSavol(index) {
    setopenJavob(openJavob == index ? null : index);
  }
  return (
    <div>
      <section className="relative bg-black text-white py-10 p-10 flex  ">
        <img className="absolute z-1 top-0 left-0" src={img6} alt="" />
        <div className="w-2/5 relative top-0 z-2 flex flex-col justify-between items-start">
          <div>
            <p className="text-[48px] font-semibold">
              Fresh, Ethical, Sustainable Food
            </p>
            <p className="text-[14px] w-4/5 ">
              We source responsibly, support local farmers, and embrace
              sustainability to ensure fresh, high-quality ingredients for a
              healthier planet
            </p>
          </div>

          <button className="bg-[#FFC62B] text-[#C31E26] text-[14px] font-medium px-5 py-1 rounded">
            See More
          </button>
        </div>

        <div className="bg-[#FFFFFF1F] p-5 w-3/5 relative top-0 z-2 rounded-2xl space-y-5">
          {salJav.map((e, index) => (
            <div key={index} className="space-y-5">
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
                <div className="text-white mt-2 bg-[#C31E26] p-5 rounded-2xl space-y-2">
                  <p className="text-2xl font-medium">Sustainable Seafood</p>
                  <p className="text-[14px]">
                    Our seafood is responsibly sourced to protect marine
                    ecosystems and ensure future generations can enjoy
                    ocean-fresh flavors.
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

export default component4;
