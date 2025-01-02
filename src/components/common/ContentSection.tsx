import React, { FC } from "react";
import ContentHeader from "./ContentHeader";

type Props = {
  children: React.ReactNode;
  title: string;
};
export const ContentSection: FC<Props> = ({ children, title }) => {
  return (
    <section className="min-h-fit px-[8rem] pb-[4em] leading-loose space-y-4">
      <ContentHeader title={title} />
      {children}
    </section>
  );
};
