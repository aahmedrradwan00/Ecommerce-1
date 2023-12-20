import React from "react";

const DescriptionBox = () => {
  return (
    <div className="DescriptionBox my-[50px] mx-[170px]">
      <div className="DescriptionBox-nav flex ">
        <div className="Description flex items-center justify-center  font-[600] w-[171px] h-[70px] border-[1px] border-solid border-[#d0d0d0] ">
          Description
        </div>
        <div className="Description-fade flex items-center justify-center  font-[600] w-[171px] h-[70px] border-[1px] border-solid border-[#d0d0d0] text-[#555] bg-[#FBFBFB] ">
          Reviews (122)
        </div>
      </div>
      <div className="DescriptionBox flex flex-col gap-[25px] p-[48px] pb-[70px]  border-[1px] border-solid border-[#d0d0d0] ">
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          accusamus officiis amet consequatur, sunt distinctio! Architecto
          dignissimos, veritatis, obcaecati voluptatum fuga quidem minus
          voluptatibus voluptatem reiciendis nulla eaque, doloribus molestias!
        </p>
        <p>
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio,
          facilis dolor non similique dolorem quae consectetur quisquam a.
          Voluptatem blanditiis asperiores alias beatae pariatur amet qui veniam
          officiis adipisci necessitatibus.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
