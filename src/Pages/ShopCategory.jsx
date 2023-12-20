import React, { useContext } from "react";
import { shop_Context } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/item/Item";

const ShopCategory = (props) => {
  const {all_product} = useContext(shop_Context);
  return (
    <div>
      <img
        className="block mx-[auto] my-[30px] w-[82%]"
        src={props.banner}
        alt=""
      />
      <div className="indexSort flex justify-between my-[0px] mx-[140px] items-center ">
        <p className="">
          <span className="font-[600]">Showing 1-12</span> out of 36 products{" "}
        </p>
        <div className="sort py-[10px] px-[20px] rounded-[40px] border-[1px] border-solid border-[#888] ">
          Sort by <img className="mt-[-5px]" src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="products my-[20px] mx-[140px] grid grid-cols-4 gap-[100px] ">
        {all_product.map((data) => {
          if (props.category === data.category) {
            return (
              <Item
                key={data.id}
                id={data.id}
                name={data.name}
                image={data.image}
                new_price={data.new_price}
                old_price={data.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="land-more flex justify-center items-center my-[150px] mx-auto w-[233px] h-[69px] rounded-[75px] bg-[#ededed]  text-[18px] text-[#787878] font-[600]  ">
        <button>Explore More</button>
      </div>
    </div>
  );
};

export default ShopCategory;
