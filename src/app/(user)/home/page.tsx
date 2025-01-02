import History from "@/components/home/History";
import Introduce from "@/components/home/Introduce";
import { NiniakMamak } from "@/components/home/NiniakMamak";
import Welcome from "@/components/home/Welcome";
import React from "react";
 

const Home = () => {
  return (
    <main>
      <Welcome />
      <Introduce />
      <History />
      <NiniakMamak />
    </main>
  );
};

export default Home;
