import React from "react";
import CaptionSection from "../common/CaptionSection";
import Paragraph from "../home/Paragraph";

export const Transportasi = () => {
  return (
    <CaptionSection imgUrl="/images/KG04.png" title="Transportasi">
      <section className="text-left capitalize flex justify-around [&_ul]:space-y-4 [&_svg]:text-3xl">
        <ul>
          <li>
            <Paragraph>Menuju Koto Gadang</Paragraph>
          </li>
          <li>
            <Paragraph>Transportasi Nagari</Paragraph>
          </li>
          <li>
            <Paragraph>Antar Jemput Bandara</Paragraph>
          </li>
        </ul>
        <ul>
          <li>
            <Paragraph>Penyewaan Kendaraan</Paragraph>
          </li>
          <li>
            <Paragraph>Pusat Informasi Pengunjung</Paragraph>
          </li>
          <li>
            <Paragraph>Museum, Perpustakaan</Paragraph>
          </li>
        </ul>
      </section>
    </CaptionSection>
  );
};
