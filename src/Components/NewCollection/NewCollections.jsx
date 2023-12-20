import React from "react";
import new_collections from "../Assets/new_collections";
import Item from "../item/Item";

const NewCollections = () => {
  return (
    <div className="flex flex-col  items-center gap-[10px]  p-[90px] mb-[100px] ">
      <h1 className=" text-[50px] font-[600] text-[#171717] ">
        NEW COLLECTIONS
      </h1>
      <hr className="w-[200px] h-[6px] border-black  rounded-[10px] text-[#252525] " />
      <div className="item-card grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] mt-[50px]">
        {new_collections.map((data) => (
          <Item
            key={data.id}
            id={data.id}
            name={data.name}
            image={data.image}
            new_price={data.new_price}
            old_price={data.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default NewCollections;
