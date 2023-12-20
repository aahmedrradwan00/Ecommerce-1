import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollections from "../Components/NewCollection/NewCollections";
import Newslatter from "../Components/NewsLetter/Newslatter";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections/>
      <Newslatter/>
    </div>
  );
};

export default Shop;
