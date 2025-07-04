import React from "react";
import second from "./chil.jpeg";

const Sec2 = () => {
  return (
    <>
      <section className="flex h-[1024px] w-[100%]">
        <img src="/src/pages/main/chil.jpeg" className="w-[50%]" alt="" />
        <div className="w-[50%] bg-[#070707] px-[40px] flex flex-col gap-[12px] justify-center">
          <div className="flex flex-col gap-[12px]">
            <h2 className="font-[600] text-[#FFFFFF] text-[48px]">
              A Special Treat for <br /> First-Time Guests!
            </h2>
            <p className="text-[#FFFFFF] text-[14px] font-[400]">
              Are you visiting our restaurant for the first time? We have a
              special treat just for you! Enjoy an exclusive [X]% discount on
              your very first order, whether you choose to dine in or order
              online. It’s our way of saying welcome and thank you for trying
              our delicious dishes. From mouthwatering appetizers to delightful
              main courses, every bite is crafted to impress.
            </p>
            <br />
            <div className="flex gap-[20px]">
              <div className="bg-[#FFFFFF1F] flex gap-[14px] items-start w-[258px] flex-col p-[14px] rounded-[12px]">
                <img src="/src/pages/main/vegetables-salad copy.png" alt="" />
                <p className="text-[#FFFFFF] text-[16px]">
                  Exclusive Welcome Discount
                </p>
                <p className="text-[14px] text-[#FFFFFF]">
                  Enjoy [X]% off your first order, whether you dine in or order
                  online!
                </p>
              </div>
              <div className="bg-[#FFFFFF1F] flex gap-[14px] items-start w-[258px] flex-col p-[14px] rounded-[12px]">
                <img src="/src/pages/main/vegetables-salad.png" alt="" />
                <p className="text-[#FFFFFF] text-[16px]">
                  Exclusive Welcome Discount
                </p>
                <p className="text-[14px] text-[#FFFFFF]">
                  Savor our signature dishes made with fresh ingredients
                </p>
              </div>
            </div>
            <br />
            <br />
            <button className="text-[#C31E26] text-[14px] px-[24px] py-[8px] bg-[#FFC62B] rounded-[8px]  w-[156px]">
              Book Reservation
            </button>
          </div>
        </div>
      </section>
      <section className="flex h-[1024px] w-[100%]">
        <div className="w-[50%] bg-[#070707] px-[40px] flex flex-col gap-[12px] justify-center">
          <div className="flex flex-col gap-[12px]">
            <h2 className="font-[600] text-[#FFFFFF] text-[48px]">
              The wait is almost over! <br /> Our grand opening is around
            </h2>
            <p className="text-[#FFFFFF] text-[14px] font-[400]">
              Are you visiting our restaurant for the first time? We have a
              special treat just for you! Enjoy an exclusive [X]% discount on
              your very first order, whether you choose to dine in or order
              online. It’s our way of saying welcome and thank you for trying
              our delicious dishes. From mouthwatering appetizers to delightful
              main courses, every bite is crafted to impress.
            </p>
            <br />
            <p className="text-[#FFFFFF] text-[16px]">
                Sign up now to be the first to know!
            </p>
            <br />
            <div className="flex items-start w-[497px] gap-[24px]">
              <div className="flex gap-[14px] items-start w-[258px] flex-col p-[14px] rounded-[12px]">
                <div className="flex gap-[12px]">
                    <p className="bg-[#FFC62B] px-[10px] text-white font-[400] py-[4px] rounded-[12px] text-[54px]">
                        0
                    </p>
                    <p className="bg-[#FFC62B] px-[10px] text-white font-[400] py-[4px] rounded-[12px] text-[54px]">
                        4
                    </p>
                </div>
                <p className="text-[24px] m-auto font-bold text-[#FFFFFF]">
                  Days
                </p>
              </div>
              <p className="text-[54px] font-[400] text-[#FFFFFF]">
                :
              </p>
              <div className="flex gap-[14px] items-start w-[258px] flex-col p-[14px] rounded-[12px]">
                <div className="flex gap-[12px]">
                    <p className="bg-[#FFC62B] px-[10px] text-white font-[400] py-[4px] rounded-[12px] text-[54px]">
                        5
                    </p>
                    <p className="bg-[#FFC62B] px-[10px] text-white font-[400] py-[4px] rounded-[12px] text-[54px]">
                        0
                    </p>
                </div>
                <p className="text-[24px] m-auto font-bold text-[#FFFFFF]">
                  Hours
                </p>
              </div>
              <p className="text-[54px] font-[400] text-[#FFFFFF]">
                :
              </p>
              <div className="flex gap-[14px] items-start w-[258px] flex-col p-[14px] rounded-[12px]">
                <div className="flex gap-[12px]">
                    <p className="bg-[#FFC62B] px-[10px] text-white font-[400] py-[4px] rounded-[12px] text-[54px]">
                        0
                    </p>
                    <p className="bg-[#FFC62B] px-[10px] text-white font-[400] py-[4px] rounded-[12px] text-[54px]">
                        8
                    </p>
                </div>
                <p className="text-[24px] m-auto font-bold text-[#FFFFFF]">
                  Minute
                </p>
              </div>
            </div>
            <br />
            <br />
            <button className="bg-[#C31E26] text-[14px] px-[24px] py-[8px] text-[#070707] rounded-[8px]  w-[156px]">
              Sign Up Now
            </button>
          </div>
        </div>
        <img src="/src/pages/main/chil.jpeg" className="w-[50%]" alt="" />
      </section>
    </>
  );
};

export default Sec2;
