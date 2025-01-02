import React from "react"; 
import Paragraph from "./Paragraph";
import { ContentSection } from "../common/ContentSection";

const Introduce = () => {
  const text: string[] = [
    " Kotogadang adalah nagari (setingkat desa) di Kecamatan IV Koto,Kabupaten Agam, Provinsi Sumatra Barat. Nagari ini berada diantara Ngarai  dan Gunung Singgalang dengan ketinggian 920 – 950 meter di atas permukaan laut. Luas wilayah Kotogadang adalah 896 hektar dengan populasi 2500 jiwa.",
    "Nagari ini adalah salah satu wilayah desa yang pertama kali mendapatkan akses Pendidikan barat sejak pertengahan abad ke-19 dan sejak itu penduduknya banyak menjadi birokrat, pendidik, dan professional di bidangnya masing-masing. Selain itu, para penduduk Kotogadang juga dikenal terampil dalam kerajinan perak, sulam dan tenun hingga produknya dijual ke seluruh dunia.",
    "Selain kerajinan tangannya, kuliner local Kotogadang juga layak dicoba. Gulai Itik Kotogadang adalah salah satu menu popular yang ada. Selain itu, untuk menemani minum kopi, coba juga kue ruok yang sangat jarang dijumpai di daerah lain. Jika kamu menyenangi Sejarah, kerajinan tangan, atau ingin sekedar rehat sejenak dari keseharian yang padat, kunjungi dan menginap di Kotogadang dapat menjadi opsi menarik.",
  ];

  const RenderText = () => {
    return text.map((text, index) => <Paragraph key={index} >{text}</Paragraph>);
  };

  return (
    <ContentSection title="selamat datang di kotogadang">
      <RenderText />
    </ContentSection>
  );
};

export default Introduce;
