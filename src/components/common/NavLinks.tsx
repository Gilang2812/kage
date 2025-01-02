import React from "react";
import { NavItems } from "./NavItems";
import { FaSearch } from "react-icons/fa";

export const NavLinks = () => {
  return (
    <ul className="grid gap-4 grow place items-center   ">
      <NavItems link="/home" label="koto gadang" />
      <NavItems link="/keberlanjutan" label="keberlanjutan" />
      <NavItems link="/penginapan" label="penginapan" />
      <NavItems link="/paket-wisata" label="paket wisata" />
      <NavItems link="/info" label="informasi penting & layanan" /> 
      <li>
        <FaSearch className="trans-eio"/>
      </li>
    </ul>
  );
};
