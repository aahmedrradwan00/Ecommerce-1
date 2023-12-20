import React from "react";
import arrow_icon from "../Assets/breadcrum_arrow.png";
import { Link } from "react-router-dom";

const Breadcrum = (props) => {
  return (
    <div className="flex gap-[10px] my-[60px] mx-[170px] items-center text-[#5e5e5e] font-[600] capitalize ">
      Home <img src={arrow_icon} alt="" />
      <Link to={"/"} className="hover:text-[#ff4141]">
        Shop
      </Link>
      <img src={arrow_icon} alt="" />
      <Link to={`/${props.product.category}`} className="hover:text-[#ff4141]">
        {props.product.category}
      </Link>
      <img src={arrow_icon} alt="" /> {props.product.name}
    </div>
  );
};

export default Breadcrum;
