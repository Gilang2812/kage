import React from "react";
import { CardSection } from "../common/CardSection";
import { tracking } from "@/data/tracking";
import { PackageItem } from "./PackageItem";
import { SiRoamresearch } from "react-icons/si";

export const Tracking = () => {
  const RenderTracking = () => {
    return tracking.map((item, index) => (
      <PackageItem
        src={item.src}
        address={item.address}
        email={item.email}
        name={item.name}
        phone={item.phone}
        price={item.price}
        key={index}
        Icon={SiRoamresearch}
      />
    ));
  };
  return (
    <CardSection title="Tracking">
      <RenderTracking />
    </CardSection>
  );
};
