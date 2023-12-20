import React, { useContext } from "react";
import { shop_Context } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
import "./CartItems.css";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTatalCartAmount } =
    useContext(shop_Context);

  return (
    <div className="cart-items mx-[170px] my-[100px] ">
      <div className="cart-items-format main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>remove</p>
      </div>
      <hr className="h-[3px]" />
      {all_product.map((e, i) => {
        if (cartItems[e.id] > 0) {
          return (
            <div className="cart-items-format border-b-[1px]  " key={i}>
              <img className="h-[62px]" src={e.image} alt="" />
              <p> {e.name}</p>
              <p>$ {e.new_price}</p>
              <p className="w-[34px] h-[25px] border-solid border-[1px] flex justify-center items-center">
                {cartItems[e.id]}
              </p>
              <p>$ {e.new_price * cartItems[e.id]}</p>
              <img
                className=" w-[15px] mx-[30px] cursor-pointer"
                src={remove_icon}
                onClick={() => {
                  removeFromCart(e.id);
                }}
                alt=""
              />
            </div>
          );
        }
      })}
      <div className="cart-items-down flex my-[100px]  ">
        <div className="cart-items-total flex-1 flex flex-col mr-[200px] gap-[40px]">
          <h1 className="font-[600] text-[28px] pb-[20px]">Cart Totals</h1>
          <div>
            <div className="cart-items-total-item flex justify-between py-[15px] ">
              <p>Subtotal</p>
              <p>${getTatalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-items-total-item flex justify-between py-[15px]">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cart-items-total-item flex justify-between py-[15px]">
              <h3>Total</h3>
              <h3>${getTatalCartAmount()}</h3>
            </div>
          </div>
          <button className="w-[262px] h-[58px] text-[#fff] bg-[#ff5a5a] font-[600] rounded-[4px]">
            PROCEED TO CHECKOUT
          </button>
        </div>

        <div className="cart-items-promocode flex-1 flex flex-col">
          <p className="text-[#555]">If you have a promo code, Enter it here</p>
          <div className="promocode-box w-[504px] h-[58px] mt-[15px] pl-[20px] bg-[#eaeaea] flex">
            <input
              className=" outline-0 border-0 bg-transparent text-[16px] w-[330px] h-[50px] items-center"
              type="text"
              placeholder="promo code"
            />
            <button className="w-[170px] h-[58px]  bg-black text-white   ">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
