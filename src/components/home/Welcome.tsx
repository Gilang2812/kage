import React from "react";

import { TopPageSection } from "../common/TopPageSection";
import H2 from "../common/H2";
import H3 from "../common/H3";
import { SosMedAccount } from "../common/SosMedAccount";

const Welcome = () => {
  return (
    <TopPageSection bgUrl="/images/KG05.png">
      <section className="space-y-4 shrink basis-96">
        <H2 classList="animate-[slideInReverse_1s_1s_linear_forwards] ">
          Koto Gadang
        </H2>
        <H2 classList=" animate-[slideIn_1s_1s_linear_forwards] ">
          Nagari Pusako
        </H2>
        <p className="opacity-0  animate-[fade_1s_2s_linear_forwards] animation-delay-300 font-normal text-gray-300 text-base drop-shadow max-w-lg line-clamp-3">
          Kotogadang adalah nagari (setingkat desa) di Kecamatan IV Koto,
          Kabupaten Agam, Provinsi Sumatra Barat. Nagari ini berada di antara
          Ngarai Sianok dan Gunung Singgalang dengan ketinggian 920 - 950 meter
          di atas permukaan laut. Luas wilayah Kotogadang adalah 896 hektar
          dengan populasi 2500 jiwa.
        </p>
        <H3>selamat datang di koto gadang</H3>
      </section>
      <section className="opacity-0 [&_nav]:flex [&_nav]:lg:flex-col [&_nav]:justify-center [&_nav]:items-center animate-[fade_1s_1s_linear_forwards]  text-base  w-fit  [&_nav]:gap-5  text-slate-900">
       <SosMedAccount />
      </section>
    </TopPageSection>
  );
};

export default Welcome;
