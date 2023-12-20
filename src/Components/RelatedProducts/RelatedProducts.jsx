import React, { useContext } from "react";
import RProducts from "../Assets/data";
import Item from "../item/Item";

const RelatedProducts = (props) => {
  const { product } = props;
  console.log(product.category);
  // console.log(item.category);
  
  return (
    <div className="RelatedProducts   flex flex-col items-center gap-[10px]  p-[90px] mb-[100px]">
      <h1 className=" text-[50px] font-[600] text-[#171717] ">
        Related Products
      </h1>
      <hr className="w-[200px] h-[6px] border-black  rounded-[10px] text-[#252525] " />
      <div className="items grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]  mt-[50px] ">
        {RProducts.map((item) => {
          if (product.category === item.category) {
            return (
              <Item
                name={item.name}
                id={item.id}
                key={item.id}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
