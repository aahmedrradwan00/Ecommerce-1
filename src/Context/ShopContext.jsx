import { createContext, useState } from "react";

import all_product from "../Components/Assets/all_product";

export const shop_Context = createContext(null);

const getDefultCart = () => {
  let cart = [];
  for (let i = 0; i <= all_product.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTatalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((e) => e.id === Number(item));
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItemes = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const Contextvalue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTatalCartAmount,
    getTotalCartItemes,
  };

  return (
    <div>
      <shop_Context.Provider value={Contextvalue}>
        {props.children}
      </shop_Context.Provider>
    </div>
  );
};

export default ShopContextProvider;
