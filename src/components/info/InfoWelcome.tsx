import React from "react";
import { TopPageSection } from "../common/TopPageSection";
import H2 from "../common/H2";
import H3 from "../common/H3";

export const InfoWelcome = () => {
  return (
    <TopPageSection bgUrl="/images/KG01.png">
      <section className="space-y-4">
        <H2>informasi penting & layanan</H2>
        <p className="opacity-0  animate-[fade_1s_2s_linear_forwards] animation-delay-300 font-normal text-gray-300 text-base drop-shadow max-w-lg line-clamp-3">
          Ada banyak layanan penunjang yang dapat membantu kenyamanan kamu
          selama berada di Kotogadang. Kedai makan, warung, moda transportasi
          dan pusat informasi pengunjung mungkin akan membantumu .
        </p>
        <H3>ALAMAT & INFORMASI PENTING SELAMA DI KOTOGADANG</H3>
      </section>
    </TopPageSection>
  );
};
