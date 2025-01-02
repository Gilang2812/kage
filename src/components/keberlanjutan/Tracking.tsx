import React from "react";
import CaptionSection from "../common/CaptionSection";
import { SustanabilityArticle } from "./SustanabilityArticle";

export const Tracking = () => {
  const perilaku = ["Selalu dalam jalur trekking sesuai petunjuk ","Hindari masuk ke area dengan tumbuhan tinggi","Jaga jarak dari dinding jurang"]
  const alasan = ["Beberapa tumbuhan membutuhkan waktu lama untuk tumbuh Kembali","Beberapa hewan endemic hidup di tempat yang lebih tertutup","Beberapa dinding jurang lebih rentan longsor"]
  return (
    <CaptionSection
      imgUrl="/images/KG02.png"
      title="jaga kebersihan lingkungan nagari"
    >
     <SustanabilityArticle  alasan={alasan} perilaku={perilaku}/>
    </CaptionSection>
  );
};
