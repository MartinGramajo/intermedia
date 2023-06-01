import React from "react";
import Planes from "../components/planes/Planes";
import Banner from "../components/banner/Banner";
import Porque from "../components/porque/Porque";
import PreguntasFrecuentes from "../components/preguntasFrecuentes/PreguntasFrecuentes";
import Comunicate from "../components/comunicate/Comunicate";
import NavbarReact from "../components/navbarReact/NavbarReact";

export default function Home() {
  return (
    <div>
      <NavbarReact />
      <Banner />
      <Planes />
      <Porque />
      <PreguntasFrecuentes />
      <Comunicate />
    </div>
  );
}
