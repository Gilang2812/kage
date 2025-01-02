import React from "react";
import { TopPageSection } from "../common/TopPageSection";
import H2 from "../common/H2";
import H3 from "../common/H3";

export const PaketWisataWelcome = () => {
  return (
    <TopPageSection bgUrl="/images/KG04.png">
      <section className="space-y-4">
        <H2>Paket Wisata</H2>
        <p className="opacity-0  animate-[fade_1s_2s_linear_forwards] animation-delay-300 font-normal text-gray-300 text-base drop-shadow max-w-lg line-clamp-3">
          Bentang alam di antara kaki Gunung Singgalang dan Ngarai Sianok,
          aktivitas pertanian, budaya kerajinan tangan dan Sejarah Panjang
          membuat Kotogadang dapat menawarkan banyak hal. Cobalah hal-hal
          tersebut untuk mendapatkan pengalaman yang lengkap.
        </p>
        <H3>ALAM, BUDAYA DAN SEJARAH DI KOTOGADANG</H3>
      </section>
    </TopPageSection>
  );
};
