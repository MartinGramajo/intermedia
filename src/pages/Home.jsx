import React from "react";
import NavbarReact from "../components/navbarReact/NavbarReact";
import Planes from "../components/planes/Planes";
import Banner from "../components/banner/Banner";
import Porque from "../components/porque/Porque";

export default function Home() {
  return (
    <div>
      {/* <NavbarReact /> */}
      <Banner />
      <Planes />
      <Porque />
    </div>
  );
}
