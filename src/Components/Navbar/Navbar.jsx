import React, { useContext, useState } from "react";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { shop_Context } from "../../Context/ShopContext";

const Navbar = () => {
  const [topics] = useState([
    {
      name: "Shop",
    },
    {
      name: "Men",
    },
    {
      name: "Women",
    },
    {
      name: "Kids",
    },
  ]);

  const { getTotalCartItemes } = useContext(shop_Context);

  const [menu, setMenu] = useState();
  return (
    <div className=" navbar  flex justify-around  p-[16px] shadow shadow-black/20	">
      <Link to={"/"}>
        <div className="navbar-logo flex items-center gap-[10px] " >
          <img src={logo} alt="" />
          <p className="text-[24px] text-[#171717] font-medium	">SHOPPER</p>
        </div>
      </Link>
      <ul className="nav-menu flex items-center gap-[50px]  text-[#626262] text-[20px] font-[500]">
        {topics.map((topic) => (
          <li
            onClick={() => setMenu(topic.name)}
            className="flex flex-col items-center justify-center gap-[30px] cursor-pointer hover:text-[#ff4141]"
            key={topic.name}
          >
            <Link to={topic.name === "Shop" ? "/" : topic.name.toLowerCase()}>
              {topic.name}
            </Link>
            {menu === topic.name ? (
              <hr className="border-0 w-[80%] h-[3px] rounded-[10px] bg-[#ff4141] mt-[-20px]" />
            ) : (
              <></>
            )}
          </li>
        ))}
      </ul>
      <div className="nav-login-cart flex items-center gap-12">
        <Link to="/login">
          <button className="w-[137px] h-[48px] rounded-[75px] text-[#515151] bg-white outline-0 border-solid border-[1px] border-[#7a7a7a] text-[20px] font-medium cursor-pointer  active:bg-[#f3f3f3]	">
            Login
          </button>
        </Link>
        <Link to={"/cart"}>
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count w-[22px] h-[22px]  flex flex-col justify-center items-center text-[14px] text-white  bg-[red] rounded-[11px] mt-[-35px] ml-[-55px]">
          {getTotalCartItemes()}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
