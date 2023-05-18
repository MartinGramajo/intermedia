import React from "react";
import { Button, Image } from "react-bootstrap";
import vps from "../../assets/img/vps.png";
import web from "../../assets/img/web.png";
import dominio from "../../assets/img/dominios.png";

const datos = [
  {
    id: 1,
    imagen: vps,
    titulo: "VPS",
    contenido1: "Servidores Privados Virtuales SSD ",
    contenido2: "Autonomía Performance SSD",
    precio: "ARS 5700",
    iva: "Desde ARS 5700 x mes + iva",
  },
  {
    id: 2,
    imagen: web,
    titulo: "Web Hosting",
    contenido1: "Soporte + Seguridad + Asesoramiento ",
    contenido2: "",
    precio: "ARS 500",
    iva: "Planes desde ARS 500 x mes + iva x el primer año",
  },
  {
    id: 3,
    imagen: dominio,
    titulo: "Dominios",
    contenido1: " Registrá tu dominio. ",
    contenido2: "Nombre + Dominio + Clientes en un click",
    precio: "ARS 2200",
    iva: "Desde ARS 2200 + iva x año",
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
                  <Button className="btn-precio">
                    {" "}
                    <span className="fs-20 peso-800"> COMPRAR</span>{" "}
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
