import React from "react";

const Newslatter = () => {
  return (
    <div className=" flex flex-col justify-center items-center gap-[30px] w-[80%] h-[40vh] m-auto  mb-[50px]  pt-[140px] pb-[140px]  bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] to-[60%] ">
      <h1 className="text-[44px] font-[600] text-[#454545] ">
        Get Exclusivev Offers On Your Email
      </h1>
      <p className="text-[20px]  text-[#454545]">
        Subscribe to our newletter and stay updataed
      </p>

      <div className="form flex items-center justify-between w-[730px] rounded-[80px] border-[1px] border-solid border-[#e3e3e3] ">
        <input
          className=" outline-0 border-none text-[#616161] w-[500px] text-[18px] pl-[20px] "
          type="text"
          placeholder="Your Email"
        ></input>
        <button className="bg-black text-white p-[20px] rounded-[75px] w-[210px] h-[70px]">
          Subsribe
        </button>
      </div>
    </div>
  );
};

export default Newslatter;
