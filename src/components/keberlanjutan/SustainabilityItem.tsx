import React, { FC } from "react";
import Paragraph from "../home/Paragraph";

type Props = {
  title: string;
  data: string[];
};
export const SustainabilityItem: FC<Props> = ({ data , title}) => {
  const RenderList = () => {
    return data.map((item, index) => (
      <li key={index}>
        <Paragraph>{item}</Paragraph>
      </li>
    ));
  };
  
  return (
    <article className="text-left ">
      <h4 className="font-bold text-lg capitalize">
        {title}
      </h4>
      <ul className="list-disc px-4  marker:content-['-']  [&_p]:ml-2 ">
        <RenderList />
      </ul>
    </article>
  );
};
