
import { Cleanliness } from "@/components/keberlanjutan/Cleanliness";
import Description from "@/components/keberlanjutan/Description";
import { GreeningSection } from "@/components/keberlanjutan/GreeningSection";
import { Swimming } from "@/components/keberlanjutan/Swimming";
import { Tracking } from "@/components/keberlanjutan/Tracking";
import { Welcome } from "@/components/keberlanjutan/Welcome";
import React from "react";

export default function Keberlanjutan() {
  return (
    <main>
      <Welcome />
      <Description />
      <GreeningSection />
      <Cleanliness />
      <Swimming />
      <Tracking />

    </main>
  );
}
