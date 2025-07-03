import React from "react";
import img3 from "./images/vegetables-salad copy.png";
import img4 from "./images/vegetables-salad(1).png";
import img5 from "./images/vegetables-salad(2).png";
const Component2 = () => {
  return (
    <div>
      {" "}
      <section className="bg-[#FFC62B] py-12">
        <p className="text-[#C31E26] text-[48px] font-bold text-center w-4/5 m-auto leading-[50px]">
          A CULINARY DESTINATION WHERE PASSION MEETS PERFECTION,{" "}
          <span className="text-black">
            SERVING EXQUISITE FLAVORS AND IMPECCABLE SERVICE
          </span>
        </p>

        <div className="w-[50%] h-[455px] m-auto relative my-10 shadow-2xl">
          <div className="flex flex-col items-center p-3 rounded-2xl absolute z-1 top-28 -left-64 bg-white">
            <div className="flex items-center gap-2.5">
              <img src={img3} alt="" />
              <p className="text-[48px] font-semibold ">100%</p>
            </div>
            <p className="text-[18px] font-medium ">
              Happy Customers Served Daily
            </p>
          </div>

          <img
            className="w-full h-full object-cover"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Sarmalute_mamaliguta.JPG/1024px-Sarmalute_mamaliguta.JPG"
            alt=""
          />

          <div className="flex flex-col items-center p-3 rounded-2xl absolute z-1 top-0 -right-32 bg-white">
            <div className="flex items-center gap-2.5">
              <img src={img4} alt="" />
              <p className="text-[48px] font-semibold ">50+</p>
            </div>
            <p className="text-[18px] font-medium ">
              Unique Dishes on Our Menu
            </p>
          </div>

          <div className="flex flex-col items-center p-3 rounded-2xl absolute z-1 -bottom-10 -right-52 bg-white">
            <div className="flex items-center gap-2.5">
              <img src={img5} alt="" />
              <p className="text-[48px] font-semibold ">1000+</p>
            </div>
            <p className="text-[18px] font-medium ">
              Happy Customers Served Daily
            </p>
          </div>
        </div>

        <p className="text-[18px] font-normal m-auto w-3/5 text-center pt-10 ">
          Experience a world of culinary excellence where passion and precision
          come together, offering meticulously crafted flavors, exceptional
          service, and a dining journey that delights the senses with every
          bite, creating unforgettable moments in an elegant and welcoming
          atmosphere
        </p>
      </section>
    </div>
  );
};

export default Component2;
