import React from "react";
import exclusive_image from "../Assets/exclusive_image.png";
const Offers = () => {
  return (
    <div className="flex justify-center items-center w-[80%] m-auto h-[60vh] mb-[150px] pt-[140px] pb-[140px] bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] to-[60%]  ">
      <div className="right-side flex  flex-1 flex-col justify-center p-[50px] gap-[20px]">
        <h2 className="text-[80px] text-[#171717] font-[600] ">Exclusive</h2>
        <p className="text-[22px] text-[#171717] font-[600] ">Offers For You</p>
        <p className="text-[22px] text-[#171717] font-[600]">ONLY NO BEST SELLERS PRODUCTS</p>
        <button className="mt-[20px] flex justify-center bg-[#ff4141] w-[250px] h-[60px] items-center text-white rounded-[75px] text-[22px] gap-[15px] font-[500] hover:text-[24px] duration-200 transition-all">Check Now</button>
      </div>
      <div className="left-side flex flex-1 items-center mt-[50px] justify-end ">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
