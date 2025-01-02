import React, { FC } from "react";

type Props = {
  children: React.ReactNode;
  bgUrl: string;
};
export const TopPageSection: FC<Props> = ({ children, bgUrl }) => {
  return (
    <section
      style={{
        WebkitMaskImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0)100%)",

        backgroundImage: `url(${bgUrl})`,
      }}
      className="p-40  bg-cover bg-no-repeat flex-col text-5xl font-sans gap-8 font-extrabold min-h-screen"
    >
      <article className="gap-x-40  gap-y-10 flex animate-slideUp min-w-fit  lg:flex-row flex-col  justify-between bg-slate-800/30 backdrop-blur-[2px] border border-white/50 shadow p-10 rounded-xl drop-shadow-2xl items-center max-w-5xl text-white">
        {children}
      </article>
    </section>
  );
};
