import React, { FC } from "react";
import { MdHotel } from "react-icons/md";
import { CardProps } from "@/data/homestayData";
import { CardItem } from "../common/CardItem";

const HomestayItem: FC<CardProps> = ({
  src,
  address,
  price,
  phone,
  name,
  email,
}) => {
  return (
    <CardItem
      Icon={MdHotel}
      address={address}
      email={email}
      name={name}
      phone={phone}
      price={price}
      src={src}
    />
  );
};

export default HomestayItem;
