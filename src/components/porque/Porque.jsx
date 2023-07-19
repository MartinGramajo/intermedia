import React from "react";
import "./porque.css";
import { Image } from "react-bootstrap";
import cohete from "../../assets/img/cohete.png";
import config from "../../assets/img/config.png";
import candado from "../../assets/img/candado.png";
import escudo from "../../assets/img/escudo.png";
import panel from "../../assets/img/panel.png";
import ganrantia from "../../assets/img/garantia.png";

const cartas = [
  {
    id: 1,
    icon: cohete,
    titulo: "Máxima Velocidad",
    contenido: "Tu sitio web más rápido",
  },
  {
    id: 2,
    icon: config,
    titulo: "WordPress en un Click",
    contenido: "Instala tus aplicaciones facilmente",
  },
  {
    id: 3,
    icon: candado,
    titulo: "Let´s Encrypt Gratis",
    contenido: "Activa la certificación de tu dominio",
  },
];

const cartas2 = [
  {
    id: 1,
    icon: escudo,
    titulo: "Mayor Seguridad",
    contenido: "Protección contra ataques y Malware para tu web y correos",
  },
  {
    id: 2,
    icon: panel,
    titulo: "Panel de Control cPanel",
    contenido: "Maneja tu mismo tu correo y tu webSSL",
  },
  {
    id: 3,
    icon: ganrantia,
    titulo: "30 días de Garantía",
    contenido: "Puedes pedir devolución del servicio",
  },
];

export default function Porque() {
  return (
    <div className="container pt-5" id="porQueNosotros">
      <div className="text-center pt-4">
        <div className="d-none d-md-block">
          <h1 className="peso-800 fs-57">¿Por qué elegir a IntermediaSP?</h1>
          <h6 className="pt-3 peso-400 fs-23">
            Velocidad, fiabilidad y seguridad al máximo
          </h6>
        </div>
        <div className="d-md-none d-block">
          <h1 className="peso-800 fs-32">¿Por qué elegir a IntermediaSP?</h1>
          <h3 className="py-3 peso-400 fs-23">
            Velocidad, fiabilidad <br /> y seguridad al máximo
          </h3>
        </div>
      </div>
      <div className="d-flex justify-content-evenly flex-wrap py-4">
        {cartas.map((carta, i) => (
          <div className=" col-12 col-md-12 col-lg-4 py-4" key={i}>
            <div className="text-center pb-2">
              <Image
                className="iconos-width"
                src={carta.icon}
                fluid
                alt="iconos"
              />
            </div>
            <div className="text-center pb-4">
              <h3 className="peso-800 fs-32">{carta.titulo}</h3>
            </div>
            <div className="text-center">
              <h5 className="peso-600 fs-22">{carta.contenido}</h5>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-evenly flex-wrap pb-5">
        {cartas2.map((carta, i) => (
          <div className="col-12 col-md-12 col-lg-4  py-4" key={i}>
            <div className="text-center pb-2">
              <Image
                className="iconos-width"
                src={carta.icon}
                fluid
                alt=" vps"
              />
            </div>
            <div className="text-center pb-4">
              <h3 className="peso-800 fs-32">{carta.titulo}</h3>
            </div>
            <div className="text-center">
              <h5 className="peso-600 fs-22">{carta.contenido}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
