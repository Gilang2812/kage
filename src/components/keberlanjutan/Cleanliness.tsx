import React from "react";
import CaptionSection from "../common/CaptionSection"; 
import { SustanabilityArticle } from "./SustanabilityArticle";

export const Cleanliness = () => {
  const perilaku = [
    "Bawa wadah makan dan botol minum pribadi serta tas belanja sendiri",
    "Buang sampahmu sesuai kategorinya untuk memudahkan proses daur ulang dan pengomposan",
  ];
  const alasan = [
    "Kemasan sekali pakai banyak mencemari alam dan membutuhkan waktu lama untuk terurai",
    "Sampah organic memiliki banyak manfaat untuk lingkungan dan kami akan mengelola sampah organikmu",
  ];
  return (
    <CaptionSection
      imgUrl="/images/KG04.png"
      title="jaga kebersihan lingkungan nagari"
    >
     <SustanabilityArticle alasan={alasan} perilaku={perilaku}/>
    </CaptionSection>
  );
};
