import React from "react";
import Cartas from "./Cartas";
import "./planes.css";

export default function Planes() {
  return (
    <div id="planes">
      <div className="text-center pt-5">
        <div className="d-none d-md-block">
          <h1 className="peso-800 fs-57 pt-5">Planes Web Hosting</h1>
        </div>
        <div className="d-md-none d-block">
          <h1 className="peso-800 fs-32">Planes Web Hosting</h1>
        </div>
      </div>
      <div className="py-4">
        <Cartas />
      </div>
    </div>
  );
}
