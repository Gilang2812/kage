import { CardProps } from "@/data/homestayData";
import React, { FC } from "react";
import { CardItem } from "../common/CardItem";
import { IconType } from "react-icons";
type Props = CardProps & {
  Icon: IconType;
};
export const PackageItem: FC<Props> = ({
  src,
  address,
  price,
  phone,
  name,
  email,
  Icon,
}) => {
  return (
    <CardItem
      Icon={Icon}
      address={address}
      email={email}
      name={name}
      phone={phone}
      price={price}
      src={src}
    />
  );
};
