import React from "react";
import Item from "../item/Item";
import data from "../Assets/data";

const Popular = () => {
  return (
    <div className="flex flex-col  items-center gap-[10px]  p-[90px] mb-[100px]">
      <h1 className=" lg:text-[50px] md:text-[25px]  font-[600] text-[#171717]  ">
        POPULAR IN WOMEN
      </h1>
      <hr className="w-[200px] h-[6px] border-black  rounded-[10px] text-[#252525] " />
      <div className="item-card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] mt-[50px]">
        {data.map((data) => {
          if (data.category === "women") {
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
          }
        })}
      </div>
    </div>
  );
};

export default Popular;
