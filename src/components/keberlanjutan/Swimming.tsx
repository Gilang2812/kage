import React from "react";
import CaptionSection from "../common/CaptionSection";
import { SustanabilityArticle } from "./SustanabilityArticle";

export const Swimming = () => {

  const perilaku = [ "Jangan berenang di aliran Sungai Sianok",
    "Hindari berjalan di tepian Sungai yang bertanah lunak",
    "Jangan membuang benda apapun ke Sungai dan sekitarnya",
    "Jangan gunakan sabun, deterjen dan bahan kimia lain dalam mencuci di sekitar sungai"
  ]
  const alasan = [ "Jangan berenang di aliran Sungai Sianok",
    "Hindari berjalan di tepian Sungai yang bertanah lunak",
    "Jangan membuang benda apapun ke Sungai dan sekitarnya",
    "Jangan gunakan sabun, deterjen dan bahan kimia lain dalam mencuci di sekitar sungai",
    "Sungai Sianok adalah sumber kehidupan bagi banyak jenis Binatang dan tanaman endemik",
    "Bahan kimia dalam produk kebersihan dan kecantikan kamu dapat mencemari air Sungai dan tanah"]
  return (
    <CaptionSection
      imgUrl="/images/KG03.png"
      title="jaga kebersihan lingkungan nagari"
    >
          <SustanabilityArticle  alasan={alasan} perilaku={perilaku}/>
     
    </CaptionSection>
  );
};
