import React, { useState } from "react";
import logo from "../Assets/logo.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import instagram_icon from "../Assets/instagram_icon.png";

const Footer = () => {
  const [links] = useState([
    "Company",
    "Products",
    "Offices",
    "About",
    "Contact",
  ]);

  const [social_icons] = useState([
    whatsapp_icon,
    pintester_icon,
    instagram_icon,
  ]);
  return (
    <div className="footer flex flex-col justify-center items-center gap-[50px] mt-[80px]">
      <div className="logo flex  items-center gap-[20px]">
        <img className="w-[80px]" src={logo} alt="" />
        <p className="font-[700] text-[26px] text-[#383838]">SHOPPER</p>
      </div>

      <ul className="links flex gap-[50px] text-[#252525]">
        {links.map((link, index) => (
          <li key={index} className=" cursor-pointer  hover:text-[#ff4141]">
            {link}
          </li>
        ))}
      </ul>
      <div className="social-icon flex gap-[20px] cursor-pointer">
        {social_icons.map((icon, index) => (
          <div key={index} className="p-[10px] pb-[6px] bg-[#e2dfdf4d] border-solid border-[#ebebeb] rounded-[30px] ">
            <img  src={icon} alt="" />
          </div>
        ))}
      </div>
      <div className="copyright flex flex-col items-center gap-[30px] w-[100%]  mb-[30px] text-[20px]">
        <hr className="w-[80%] h-[3px] rounded-[10px]e" />
        <p>Copyright @ 2023 - All Right Reservd.</p>
      </div>
    </div>
  );
};

export default Footer;
