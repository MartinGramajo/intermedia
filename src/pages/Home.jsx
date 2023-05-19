import React from "react";
import NavbarReact from "../components/navbarReact/NavbarReact";
import Planes from "../components/planes/Planes";
import Banner from "../components/banner/Banner";
import Porque from "../components/porque/Porque";
import PreguntasFrecuentes from "../components/preguntasFrecuentes/PreguntasFrecuentes";

export default function Home() {
  return (
    <div>
      {/* <NavbarReact /> */}
      <Banner />
      <Planes />
      <Porque />
      <PreguntasFrecuentes />
    </div>
  );
}
