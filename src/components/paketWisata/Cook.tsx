import React from "react";
import { CardSection } from "../common/CardSection";
import { GiCook } from "react-icons/gi";
import { PackageItem } from "./PackageItem";
import { cook } from "@/data/cook";

export const Cook = () => {
    const RenderTracking = () => {
      return cook.map((item, index) => (
        <PackageItem
          src={item.src}
          address={item.address}
          email={item.email}
          name={item.name}
          phone={item.phone}
          price={item.price}
          key={index}
          Icon={GiCook}
        />
      ));
    };
  return (
    <CardSection title="kelas memasak">
      <RenderTracking />
    </CardSection>
  );
};
