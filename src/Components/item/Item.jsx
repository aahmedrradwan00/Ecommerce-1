import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className=" item w-[280px]  hover:scale-[1.05] duration-[.6s] transition-all ">
      <Link to={`/product/${props.id}`}>
        <img
          src={props.image}
          alt=""
          className="shadow shadow-black/20 rounded-[1%]"
          onClick={window.scrollTo(0,0)}
        />
      </Link>
      <p className="mt-[6px] mb-[6px]">{props.name}</p>
      <div className="item-price flex gap-[20px]">
        <div className="item-price-new text-[#374151] text-[18px] font-[600]">
          ${props.new_price}
        </div>
        <div className="item-price-old text-[#8c8c8c] text-[18px] font-[500] line-through">
          ${props.old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;
