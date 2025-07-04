import React from "react";
import Companent2 from "../about/component1";
import img1 from "../../assets/Arrow.png";
import sigmaBoy from "../../assets/sigma-sigma-boy.png";
import sigmaBoy2 from "../../assets/sigmaboy2.jpeg";
import sigmaBoy3 from "../../assets/sigmaBoy3.webp";
import img2 from "../../assets/Frame 2018.png";
import img3 from "../../assets/Rectangle 120.png";
import img4 from "../../assets/sushi.webp";
import { Button } from "antd";

const Main2 = () => {
  return (
    <div>
      <Companent2 />
      <section className="bg-[#070707]  ">
        <div className="lg:w-[600px] m-auto text-center text-white flex flex-col gap-[20px] justify-center items-center">
          <h1 className="font-bold text-[30px]"> Elegant Anniversary Dinner</h1>
          <p>
            A beautifully curated private dining experience celebrating a
            couple’s milestone anniversary. The evening featured a gourmet
            five-course meal, candlelit ambiance, and live acoustic music.
          </p>
          <Button name="See More" />
        </div>
        <div className="lg:flex-row flex-col text-white flex lg:gap-[20px] mt-[50px]">
          <img
            src={img2}
            className="lg:w-[771px] lg:h-[1000px] rounded-[10px]"
            alt=""
          />
          <aside className="lg:w-[600px] flex flex-col gap-[20px]">
            <h1 className="font-bold text-[40px]">Your Event, Our Priority</h1>
            <p>
              Have questions about your event? Fill out our dedicated form, and
              our team will assist you with personalized solutions
            </p>
            <div className="flex-col lg:flex-row flex gap-[20px]">
              <div className="flex flex-col gap-[10px]">
                <p className="font-semibold text-[20px]">First name</p>
                <input
                  type="text"
                  className="lg:w-[296px] h-[74px] rounded-[10px] w-[370px] bg-[gray] p-[20px] placeholder:text-white"
                  placeholder="Tell us who you are"
                />
              </div>
              <div className="flex flex-col gap-[10px]">
                <p className="font-semibold text-[20px]">Last name</p>
                <input
                  type="text"
                  className="lg:w-[296px] h-[74px] rounded-[10px] w-[370px] bg-[gray] p-[20px] placeholder:text-white"
                  placeholder="Tell us who you are"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <p className="font-semibold text-[20px]">Last name</p>
              <input
                type="text"
                className="lg:w-[613px] h-[74px] rounded-[10px] w-[370px] bg-[gray] p-[20px] placeholder:text-white"
                placeholder="Tell us who you are"
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <p className="font-semibold text-[20px]">Last name</p>
              <textarea
                type="text"
                className="lg:w-[613px] w-[370px]  h-[274px] rounded-[10px] bg-[gray] p-[20px] placeholder:text-white"
                placeholder="Tell us who you are"
              />
            </div>
            <button className="bg-[#C31E26] border border-[#D34C27] rounded-[10px] lg:w-[613px] w-[370px]  h-[46px] text-white">
              Send to Us
            </button>
            <h1 className="text-center">
              By Contacting us, you agree to our{" "}
              <span className="text-[red]"> Terms</span> of service and{" "}
              <span className="text-[red]"> privacy Policy</span>
            </h1>
            <h1 className="font-semibold text-[20px] text-center ">
              2025 Eato, All right reserved
            </h1>
          </aside>
        </div>
      </section>
      <section className="py-[100px] bg-[#070707] flex flex-col items-center">
        <div className="flex flex-col items-center text-center gap-[12px]">
          <h3 className="text-[#FFFFFF] text-[48px] font-[600] ">
            Navigate Easily – Find Us <br />
with Google Maps!
          </h3>
          <p className="text-[14px] w-[430px] text-[#FFFFFF] font-[400]">
            Get real-time directions and explore our location effortlessly with Google Maps integration for a seamless and hassle-free experience.
          </p>
        </div>
        <img src="/src/pages/main/Screenshot 2025-07-04 110802.png" alt="" />
      </section>
    </div>
  );
};

export default Main2;
