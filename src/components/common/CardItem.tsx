import React, { FC } from "react";
import Img from "./Img";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { CardProps } from "@/data/homestayData";
import { IconType } from "react-icons";
type Props = CardProps&{
  Icon : IconType;
}
export const CardItem: FC<Props> = ({ src, address, price, phone ,name, email,Icon}) => {
  return (
    <figure className="rounded min-w-fit overflow-clip w-fit   shadow-slate-400 dark:shadow-white shadow text-base">
      <Img
        src={src}
        alt="gambar homestay"
        width={500}
        height={500}
        loading="lazy"
        className="aspect-[6/3] object-cover min-w-96 w-96"
      />
      <figcaption className="[&_div]:flex max-w-96 [&_div:nth-child(1)]:justify-between p-3 [&_div]:gap-4 [&_div:nth-child(3)]:text-sm space-y-2 [&_p]:flex [&_p]:items-center [&_p]:gap-2  ">
        <div className="">
          <p className="text-wrap">
            <Icon /> {name}
          </p>
          <p>
            <FaLocationDot /> {address}
          </p>
        </div>
        <div className="text-tertiary font-bold drop-shadow shadow-whit">
          <p>
            Rp {price}/<sub>night</sub>
          </p>
        </div>
        <div>
          <p>
            <FaPhone /> {phone}
          </p>
          <p>
            <MdMail /> {email}
          </p>
        </div>
      </figcaption>
    </figure>
  );
};
