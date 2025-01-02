import React from "react";
import CaptionSection from "../common/CaptionSection";
import { SiRoamresearch } from "react-icons/si";
import { FaWalking } from "react-icons/fa";
import { GiCook, GiStoneCrafting } from "react-icons/gi";

export const List = () => {
  return (
    <CaptionSection title="paket wisata" imgUrl="/images/KG01.png">
      <section className="text-left flex justify-around [&_article]:space-y-4 [&_svg]:text-5xl">
        <article>
          <div>
            <p>Tracking</p>
            <SiRoamresearch />
          </div>
          <div>
            <p>Explore Nagari</p>
            <FaWalking />
          </div>
        </article>
        <article>
          <div>
            <p>Kelas Kerajinan Tangan</p>
            <GiStoneCrafting />
          </div>
          <div>
            <p>Kelas Memasak</p>
            <GiCook />
          </div>
        </article>
      </section>
    </CaptionSection>
  );
};
