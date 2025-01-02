import React from "react";
import CaptionSection from "../common/CaptionSection";
import { FaShoppingCart } from "react-icons/fa";
import { GiJeweledChalice } from "react-icons/gi";
import { FaStore, FaUsers } from "react-icons/fa6";
import { MdRestaurantMenu } from "react-icons/md";
import { BiInfoSquare } from "react-icons/bi";
import { HiLibrary } from "react-icons/hi";

const InfoList = () => {
  return (
    <CaptionSection title="Fasilitas Pendukung" imgUrl="/images/KG01.png">
      <section className="text-left capitalize flex justify-around [&_ul]:space-y-4 [&_svg]:text-3xl">
        <ul>
          <li>
            <p>Kedai Makan & Minum</p>
            <MdRestaurantMenu />
          </li>
          <li>
            <p>Warung</p>
            <FaStore />
          </li>
          <li>
            <p>Cinderamata & oleh oleh</p>
            <GiJeweledChalice />
          </li>
          <li>
            <p>Badan pengelola geopark</p>
            <FaUsers />
          </li>
        </ul>
        <ul>
          <li>
            <p>Pasar Simpang</p>
            <FaShoppingCart />
          </li>
          <li>
            <p>Pusat Informasi Pengunjung</p>
            <BiInfoSquare />
          </li>
          <li>
            <p>Museum, Perpustakaan</p>
            <HiLibrary />
          </li>
        </ul>
      </section>
    </CaptionSection>
  );
};

export default InfoList;
