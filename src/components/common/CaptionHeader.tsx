import React, { FC } from "react";

type Props = { title: string };
const CaptionHeader: FC<Props> = ({ title }) => {
  return (
    <header className=" flex justify-center capitalize   text-tertiary font-bold text-3xl">
      <h2 className=" text-center">{title}</h2>
    </header>
  );
};

export default CaptionHeader;
