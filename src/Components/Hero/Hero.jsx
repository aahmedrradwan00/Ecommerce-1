import React from "react";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="hero h-[100vh] bg-gradient-to-r from-[#fde1ff] to-[#070fe522] flex  ">
      <div className="left hero flex flex-1 flex-col justify-center leading-[1.1] gap-[20px] lg:pl-[180px] sm:flex-col">
        <h2 className="font-[600] text-[26px] text-[#090909] ">
          NEW ARRIVALS ONLY
        </h2>
        <div className="hand-icon flex items-center gap-[20px]  ">
          <p className="lg:text-[100px] sm:text-[30px] text-[#171717] font-[700]">New</p>
          <img className="w-[105px]" src={hand_icon} alt="" />
        </div>
        <p className="lg:text-[100px] sm:text-[30px]  text-[#171717] font-[700]">Collections</p>
        <p className="lg:text-[100px] sm:text-[30px]  text-[#171717] font-[700]">For Everyone</p>
        <button className="hero-btn flex justify-center bg-[#ff4141] w-[310px] h-[70px] items-center text-white rounded-[75px] text-[22px] gap-[15px] font-[500] hover:text-[24px] duration-200 transition-all  ">
          Latest Collection
          <img className="w-[20px] mt-[5px]" src={arrow_icon} alt="" />
        </button>
      </div>
      <div className="right hero flex flex-1  justify-center items-center ">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
