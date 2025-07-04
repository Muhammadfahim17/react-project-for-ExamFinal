import React from "react";
import img6 from "./images/Ellipse 2.png";
import img7 from "./images/Frame 1321315229.png";

const component5 = () => {
  return (
    <div className="bg-[#070707] text-white py-10 relative">
      <img className="absolute z-1 top-0 left-0" src={img6} alt="" />

      <p className="text-[48px] font-semibold text-center w-3/6 m-auto ">
        Secure Your Spot, Indulge in Culinary Delights
      </p>
      <p className="text-[14px]  text-center w-2/6 m-auto ">
        Make a reservation today to experience exquisite dishes, attentive
        service, and a welcoming atmosphere perfect for any occasion.
      </p>

      <div className="bg-[#FFFFFF1F] my-10 p-5 relative top-0 z-2 rounded-2xl space-y-5 m-auto mx-[5%]">
        <div className=" flex gap-5">
          <div className="w-2/4 space-y-5">
            <article className=" space-y-2" htmlFor="">
              <p className="text-2xl font-medium">Full Name</p>
              <input
                className="placeholder:text-white text-2xl font-medium bg-[#FFFFFF3D] flex items-center justify-between w-full p-2 px-5 rounded-xl"
                type="text"
                placeholder="Darlene Robetson"
              />
            </article>

            <article className=" space-y-2" htmlFor="">
              <p className="text-2xl font-medium">Number of Guests</p>
              <input
                className="placeholder:text-white text-2xl font-medium bg-[#FFFFFF3D] flex items-center justify-between w-full p-2 px-5 rounded-xl"
                type="number"
                placeholder="Person"
              />
            </article>

            <article className=" space-y-2" htmlFor="">
              <p className="text-2xl font-medium">Preferred date/time</p>
              <input
                className="placeholder:text-white text-2xl font-medium bg-[#FFFFFF3D] flex items-center justify-between w-full p-2 px-5 rounded-xl"
                type="date"
                placeholder="Person"
              />
            </article>

            <img src={img7} alt="" />
          </div>

          <div className="w-2/4 space-y-5">
            <article className=" space-y-2" htmlFor="">
              <p className="text-2xl font-medium">Email Address</p>
              <input
                className="placeholder:text-white text-2xl font-medium bg-[#FFFFFF3D] flex items-center justify-between w-full p-2 px-5 rounded-xl"
                type="email"
                placeholder="Darlenerobert@mail.com"
              />
            </article>

            <article className=" space-y-2" htmlFor="">
              <p className="text-2xl font-medium">Time of Reservation</p>
              <input
                className="placeholder:text-white text-2xl font-medium bg-[#FFFFFF3D] flex items-center justify-between w-full p-2 px-5 rounded-xl"
                type="time"
                placeholder="Person"
              />
            </article>

            <article className=" space-y-2" htmlFor="">
              <p className="text-2xl font-medium">
                Special Requests (Optional)
              </p>
              <select className="placeholder:text-white text-2xl font-medium bg-[#FFFFFF3D] flex items-center justify-between w-full p-2 px-5 rounded-xl">
                <option value="">Dietary Restrictions</option>
              </select>
            </article>

            <article className=" space-y-2" htmlFor="">
              <p className="text-2xl font-medium">Additional Notes</p>
              <textarea
                placeholder="Any other comments or requests"
                className="max-h-[55vh] min-h-[55vh] placeholder:text-white text-2xl font-medium bg-[#FFFFFF3D] flex items-center justify-between w-full p-2 px-5 rounded-xl"
              ></textarea>
            </article>

            <article className="flex items-center gap-5">
              <input type="checkbox" />
              <span>
                I confirm my reservation and agree to the restaurant's policies.
              </span>
            </article>
          </div>
        </div>
        <div className="flex justify-center pt-20">
          <button className="bg-[#FFC62B] text-[#C31E26] text-[14px] rounded px-5 py-1">
            Reserve Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default component5;
