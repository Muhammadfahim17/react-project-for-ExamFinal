import React from "react";

const component6 = () => {
  return (
    <div className="flex">
      <div className="w-2/4 bg-[#C31E26] text-white py-20 pl-20 pr-10 space-y-5">
        <span className="text-[18px] bg-[#FFFFFF1F] rounded-2xl px-5 py-1 ">
          Events & Private Dining
        </span>
        <p className="text-[32px] font-semibold pt-5 leading-[40px]">
          Join us in celebrating life’s special moments with exceptional food
          and unforgettable experiences together!
        </p>
        <p className="text-[14px]">
          special occasion, our restaurant offers the perfect setting for your
          event Whether it’s a birthday, anniversary, corporate gathering, or
          any
        </p>
        <button className="bg-[#FFC62B] text-[#C31E26] text-[14px] rounded px-5 py-1">
          See More
        </button>
      </div>

      <img className="w-2/4 h-full object-cover" src="https://upload.wikimedia.org/wikipedia/commons/0/02/Sunday_roast_-_roast_beef_1.jpg" alt="" />
    </div>
  );
};

export default component6;
