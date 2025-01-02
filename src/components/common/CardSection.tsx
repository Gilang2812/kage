import React, { FC } from "react";

type Props = {
  title:string;
  children: React.ReactNode;
};

export const CardSection: FC<Props> = ({ title,children }) => {
  return (
    <section className="px-[8em] py-[2em] space-y-8">
      <h4 className="font-bold capitalize text-3xl ">{title}</h4>
      <article className="flex gap-8 flex-wrap items-center justify-center ">
        {children}
      </article>
    </section>
  );
};
