import React, { FC } from "react";

type Props = {
  children: React.ReactNode;
  classList?:string
};
const H2: FC<Props> = ({ children , classList }) => {
  return (
    <h2 className={`opacity-0 ${classList?classList:"animate-[fade_1s_1s_linear_forwards]"} animation-delay-100 bg-gradient-to-b drop-shadow from-slate-200 text-wrap text-transparent bg-clip-text to-gray-400`}>
      {children} 
    </h2>
  );
};

export default H2;
  