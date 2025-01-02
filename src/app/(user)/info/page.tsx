import { Emergency } from "@/components/info/Emergency";
import InfoList from "@/components/info/InfoList";
import { InfoWelcome } from "@/components/info/InfoWelcome";
import { Rental } from "@/components/info/Rental";
import { ToKotoGadang } from "@/components/info/ToKotoGadang";
import { Transportasi } from "@/components/info/Transportasi";
import React from "react";

const Info = () => {
  return <main>
    <InfoWelcome /> 
    <InfoList />
    <Transportasi />
    <ToKotoGadang />
    <Rental />
    <Emergency />
    </main>;
};

export default Info;
