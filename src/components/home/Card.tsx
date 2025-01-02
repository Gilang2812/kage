"use client";
import { FC, useState } from "react";
import Img from "../common/Img";

type Props = {
  index: number;
};
export const Card:FC<Props> = ({ index }) => {
  const [clicked, setClicked] = useState(true);

  const handleClick = () => {
    setClicked(!clicked);
  }; 
  return (
    <article className="rounded-lg overflow-clip shadow  dark:shadow-white " >
      <figure className="hover:scale-110 trans-eio">
        <Img
          width={500}
          height={500}
          loading="lazy"
          onClick={handleClick}
          className={`  trans-eio object-cover aspect-[3/4]`}
          alt={`niniak mamak suku koto ${index + 1}`}
          src={`/images/KG0${index + 2}.png`}
        />
        <figcaption className=" p-8 trans-linear-slow  overflow-clip ">
          <h2 className="text-xl font-bold ">
            Niniak Mamak Suku Koto {index + 1}
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            malesuada condimentum ipsum, vitae faucibus felis fermentum
            bibendum. Donec vel ligula at velit tempor sagittis.
          </p>
          <a href="#" className="text-primary"></a>
        </figcaption>
      </figure>
    </article>
  );
};
