import React from "react";
import { Button, Image } from "react-bootstrap";
import vps from "../../assets/img/vps.png";
import web from "../../assets/img/web.png";
import dominio from "../../assets/img/dominios.png";
import { Link } from "react-router-dom";

const datos = [
  {
    id: 1,
    imagen: vps,
    titulo: "VPS",
    contenido1: "Servidores Privados Virtuales SSD ",
    contenido2: "Autonomía Performance SSD",
    precio: "ARS 8.954",
    iva: "Desde ARS 8.954 x mes + iva",
    to: "/vps",
  },
  {
    id: 2,
    imagen: web,
    titulo: "Web Hosting",
    contenido1: "Soporte + Seguridad + Asesoramiento ",
    contenido2: "",
    precio: "ARS 968",
    iva: "Planes desde ARS 968 x mes + iva x el primer año",
    to: "/hosting",
  },
  {
    id: 3,
    imagen: dominio,
    titulo: "Dominio",
    contenido1: " Registrá tu dominio. ",
    contenido2: "Nombre + Dominio + Clientes en un click",
    precio: "ARS 6.655",
    iva: "Desde ARS 6.655 + iva x año",
    to: "/dominio",
  },
];

export default function Cartas() {
  return (
    <div className="container">
      <div className="row">
        {datos.map((dato, i) => (
          <div className="col-12 col-md-12 col-lg-4 py-4" key={i}>
            <div className="d-flex justify-content-center">
              <div className="cartas">
                <div className="text-center">
                  <Image className="" src={dato.imagen} fluid alt=" vps" />
                </div>
                <div className="text-center ">
                  <h3 className="peso-800 fs-40 pb-4">{dato.titulo}</h3>
                  <h5 className="peso-600 fs-20">
                    {dato.contenido1} <br />
                    {dato.contenido2}
                  </h5>
                </div>
                <div className="text-center">
                  <h3 className="azul-precio fs-45 peso-800">{dato.precio}</h3>
                  <h6 className="fs-16 peso-300">{dato.iva}</h6>
                </div>
                <div className="d-flex justify-content-center">
                  <Button className="btn-precio" as={Link} to={dato.to}>
                    <div className="d-flex align-items-center justify-content-center">
                      <span className="fs-20 peso-800 mt-2"> COMPRAR</span>{" "}
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
