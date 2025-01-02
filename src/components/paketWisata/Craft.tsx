import React from "react";
import { CardSection } from "../common/CardSection";
import { craft } from "@/data/craft";
import { GiCrafting } from "react-icons/gi";
import { PackageItem } from "./PackageItem";

export const Craft = () => {
    const RenderCraft = () => {
      return craft.map((item, index) => (
        <PackageItem
          src={item.src}
          address={item.address}
          email={item.email}
          name={item.name}
          phone={item.phone}
          price={item.price}
          key={index}
          Icon={GiCrafting}
        />
      ));
    };
  return (
    <CardSection title="kelas kerajinan tangan"> 
      <RenderCraft />
    </CardSection>
  );
};
