import React, { FC } from "react";

type Props = {
  children: React.ReactNode;
  classList?: string;
};
const H3: FC<Props> = ({ children,classList }) => {
  return <h3 className={`opacity-0 ${classList} animate-[slideDown_1s_3s_linear_forwards] animation-delay-400 text-4xl text-slate-800 capitalize font-semibold`}>{children} </h3>;
};

export default H3;
