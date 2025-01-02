import React from "react";
import { CardSection } from "../common/CardSection";
import { explore } from "@/data/explore";
import { PackageItem } from "./PackageItem";
import { GiWalk } from "react-icons/gi";

export const Explore = () => {
  const RenderExplore = () => {
    return explore.map((item, index) => (
      <PackageItem
        src={item.src}
        address={item.address}
        email={item.email}
        name={item.name}
        phone={item.phone}
        price={item.price}
        key={index}
        Icon={GiWalk}
      />
    ));
  };
  return (
    <CardSection title="exploring nagari">
      <RenderExplore />
    </CardSection>
  );
};
