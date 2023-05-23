import React from "react";
import Planes from "../components/planes/Planes";
import Banner from "../components/banner/Banner";
import Porque from "../components/porque/Porque";
import PreguntasFrecuentes from "../components/preguntasFrecuentes/PreguntasFrecuentes";
import Comunicate from "../components/comunicate/Comunicate";

export default function Home() {
  return (
    <div>
      <Banner />
      <Planes />
      <Porque />
      <PreguntasFrecuentes />
      <Comunicate />
    </div>
  );
}
