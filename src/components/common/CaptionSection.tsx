import { FC } from "react";
import CaptionHeader from "./CaptionHeader";
import Img from "./Img";

type Props = {
  children: React.ReactNode;
  title: string;
  imgUrl: string;
};
const CaptionSection: FC<Props> = ({ title, children, imgUrl }) => {
  return (
    <section className="grid md:grid-cols-2 grid-cols-1 py-[4em]  px-[8em] mb-8">
      <figcaption className="rounded-3xl min-w-fit z-10 rounded-tr-none rounded-bl-none border-y-4 border-tertiary bg-secondary  shadow shadow-slate-300 dark:shadow-white text-center p-12">
        <section className="leading-loose  space-y-4">
          <CaptionHeader title={title} />
          <div className="text-left">{children}</div>
        </section>
      </figcaption>
      <figure className="  border-4 border-l-0 border-t-0 border-tertiary h-fit shadow dark:shadow-white shadow-tertiary">
        <Img
          src={imgUrl}
          width={500}
          height={500}
          loading="lazy"
          className="w-full shadow aspect-[5/3] object-cover  shadow-red-400 max- -translate-x-8 translate-y-8"
          alt="menjaga alam"
        />
      </figure>
    </section>
  );
};

export default CaptionSection;
