import React, { useContext } from "react";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { shop_Context } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(shop_Context);
  return (
    <div className="flex mx-[170px]">
      <div className="ProductDisplay-left  flex gap-[17px]  ">
        <div className="img-list flex flex-col  gap-[14px] ">
          <img className="h-[115px]" src={product.image} alt="" />
          <img className="h-[115px]" src={product.image} alt="" />
          <img className="h-[115px]" src={product.image} alt="" />
          <img className="h-[115px]" src={product.image} alt="" />
        </div>
        <div className="main-img  w-[587px] h-[700px]  ">
          <img className="h-[500px] " src={product.image} alt="" />
        </div>
      </div>

      <div className="ProductDisplay-right flex flex-col mx-[70px]">
        <h1 className="text-[20px] text-[#3d3d3d] font-[700]">
          {product.name}
        </h1>
        <div className="stars flex  gap-[5px] my-[13px] items-center text-[16px] ">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="prices flex gap-[20px] items-center">
          <div className="price-new text-[#374151] text-[24px] font-[600]">
            ${product.new_price}
          </div>
          <div className="price-old text-[#8c8c8c] text-[18px] font-[500] line-through">
            ${product.old_price}
          </div>
        </div>

        <div className="ProductDisplay-description w-[550px] my-[50px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          nesciunt repudiandae, distinctio aliquid corrupti eveniet. Aliquid hic
          libero quo repellat iusto blanditiis fuga officiis in ipsum. Error
          mollitia quam necessitatibus!
        </div>
        <div className="ProductDisplay-size flex flex-col gap-[20px]  ">
          <h1 className="text-[20px] text-[#656565] font-[600]">Select Size</h1>
          <div className="ProductDisplay-sizes flex  gap-[20px]">
            <div className="bg-[#fbfbfb] py-[18px] px-[24px] rounded-[3px] border-[1px] border-soild border-[#ebebeb] cursor-pointer">
              S
            </div>
            <div className="bg-[#fbfbfb] py-[18px] px-[24px] rounded-[3px] border-[1px] border-soild border-[#ebebeb] cursor-pointer">
              M
            </div>
            <div className="bg-[#fbfbfb] py-[18px] px-[24px] rounded-[3px] border-[1px] border-soild border-[#ebebeb] cursor-pointer">
              L
            </div>
            <div className="bg-[#fbfbfb] py-[18px] px-[24px] rounded-[3px] border-[1px] border-soild border-[#ebebeb] cursor-pointer">
              X
            </div>
            <div className="bg-[#fbfbfb] py-[18px] px-[24px] rounded-[3px] border-[1px] border-soild border-[#ebebeb] cursor-pointer">
              XL
            </div>
          </div>
        </div>

        <button
          onClick={() => {addToCart(product.id)}}
          className="flex justify-center items-center py-[20px] px-[40px] text-white bg-[#ff4141] text-[16px] font-[600] w-[200px] my-[30px] border-none outline-none  rounded-[6px] "
        >
          ADD TO CART
        </button>

        <div className="ProductDisplay-right-catrgory">
          <span className="capitalize">Category : {product.category}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
