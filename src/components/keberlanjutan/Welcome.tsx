import React from "react";
import H2 from "../common/H2";
import H3 from "../common/H3";
import { TopPageSection } from "../common/TopPageSection";

export const Welcome = () => {
  return (
    <TopPageSection bgUrl="/images/keberlanjutan.png">
      <section className="space-y-8">
        <H2 classList="animate-[fade_1s_1s_forwards]">
          Tujuan Wisata Keberlajutan
        </H2>
        <H3 classList="box-shadow ">MARI JAGA ALAM & LINGKUNGAN KITA</H3>
        <H3 classList="box-shadow animate-[slideDown_1s_3s_forwards]">
          SEBUAH WILAYAH YANG INDAH & RENTAN
        </H3>
      </section>
    </TopPageSection>
  );
};
