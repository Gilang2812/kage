import React from "react";
import HomestayItem from "./HomestayItem";
import { homestayData } from "@/data/homestayData";
import { CardSection } from "../common/CardSection";

const Homestays = () => {
  const RenderHomestay = () => {
    return homestayData.map((item, index) => (
      <HomestayItem
        key={index}
        price={item.price}
        address={item.address}
        email={item.email}
        name={item.name}
        phone={item.phone}
        src={item.src}
      />
    ));
  };
  return (
    <CardSection title="homestays">
      <RenderHomestay />
    </CardSection>
  );
};

export default Homestays;
