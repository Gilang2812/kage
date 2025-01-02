import React from "react";
import CaptionSection from "../common/CaptionSection";
import { ToKotoGadangItems } from "./ToKotoGadangItems";

export const ToKotoGadang = () => {
  return (
    <>
      <CaptionSection title="Menuju Koto Gadang" imgUrl="/images/KG02.png">
        <ToKotoGadangItems
          location="Bandara International Minangkabau (73km)"
          route="melalui jalur darat"
        >
          Transportasi charter atau online untuk ke Kotogadang tersedia di
          terminal kedatangan bandara.
        </ToKotoGadangItems>
      </CaptionSection>
      <CaptionSection title="Menuju Koto Gadang" imgUrl="/images/KG01.png">
        <ToKotoGadangItems
          location="dari padang (89km)"
          route="melalui jalur darat"
        >
          Jalur utama melalui kota Padang Panjang akan melewati tempat wisata
          Lembah Anai dan memiliki banyak tempat peristirahatan. Jalur
          alternatif melalui Malalak memiliki lalu lintas yang lebih lengang
          sehingga dapat terhindar dari kemacetan di beberapa titik.
        </ToKotoGadangItems>
      </CaptionSection>
      <CaptionSection title="Menuju Koto Gadang" imgUrl="/images/KG04.png">
        <ToKotoGadangItems
          location="dari pekan baru (234km)"
          route="melalui jalur darat"
        >
          Jalur utama melalui Jl. Raya Bangkinang – Payakumbuh akan melewati
          Kelok 9 dan Kota Payakumbuh sebelum memasuki Bukittinggi dan
          Kotogadang.
        </ToKotoGadangItems>
      </CaptionSection>
      <CaptionSection title="Menuju Koto Gadang" imgUrl="/images/KG03.png">
        <ToKotoGadangItems
          location="dari jambi (540km)"
          route="melalui jalur darat"
        >
          Jalur utama akan melewati Muara Bulian dan masuk di wilayah Sumatra
          Barat melalui Kabupaten Dharmasraya, tepi Danau Singkarak, Kota Padang
          Panjang sebelum masuk ke Bukittinggi dan Kotogadang.
        </ToKotoGadangItems>
      </CaptionSection>
    </>
  );
};
